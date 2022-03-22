<template>
  <v-popup :title="title" :isShow="isShow">
    <div class="v-popup__inner__inputs">
      <div class="row">
        <v-select
          name="category"
          placeholder="Категория"
          :options="categoryList"
          option-title="name"
          option-value="name"
          @select="selectCategoryHandler($event)"
        />
        <button class="secondary-btn">Создать новую категорию</button>
      </div>
      <div style="margin: 20px 0 0" class="row">
        <datepicker utc position="center" v-model="transactionDate" />
      </div>
      <div style="margin: 20px 0 0" class="row">
        <v-input
          label="Введите название операции"
          name="transactionName"
          placeholder="Операция"
          type="text"
          @input-value="transactionNameHandler"
        />
        <v-input
          :label="transactionText"
          name="transactionAmount"
          type="number"
          @input-value="transactionAmountHandler"
        />
      </div>
      <div style="justify-content: center; margin: 30px 0 0" class="row">
        <button @click="confirmTransaction" class="primary-btn">
          Добавить
        </button>
      </div>
    </div>
  </v-popup>
</template>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import VPopup from "./UI/VPopup.vue";
import VSelect from "./UI/VSelect.vue";
import VInput from "./UI/VInput.vue";
import { notify } from "@kyvg/vue3-notification";
import { useRoute } from "vue-router";
import { useDealsStore } from "@/store/dealsStore";
import { computed, ref } from "vue";
import date from "date-and-time";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "TransactionPopup",
  components: { VPopup, VSelect, VInput, Datepicker },
  props: {
    title: String,
    isShow: Boolean,
  },
  setup() {
    const dealStore = useDealsStore();
    const route = useRoute();

    const categoryList = computed(() =>
      route.name === "Income"
        ? dealStore.categoryIncomeList
        : dealStore.categoryCostsList
    );
    const transactionText = computed(() =>
      route.name === "Income"
        ? "Введите сумму заработанных средств"
        : "Введите сумму потраченных средств"
    );

    const selectedCategory = ref({});
    const transactionName = ref("");
    const transactionAmount = ref(0);
    const transactionDate = ref(new Date());

    const selectCategoryHandler = (event: any) => {
      return (selectedCategory.value = categoryList.value.find(
        (item: any) => item.name === event.value
      ));
    };
    const transactionNameHandler = (event: any) => {
      return (transactionName.value = event);
    };
    const transactionAmountHandler = (event: any) => {
      return (transactionAmount.value = event);
    };

    const isFormFilled = computed(() => {
      return (
        !!transactionAmount.value &&
        !!transactionName.value &&
        !!selectedCategory.value &&
        !!transactionDate.value
      );
    });

    const confirmTransaction = () => {
      if (!isFormFilled.value) {
        return notify({
          title: "Ошибка",
          type: "error",
          text: "Заполните все поля",
        });
      }
      const data = [
        date.format(new Date(transactionDate.value), "YYYY/MM/DD HH:mm"),
        transactionName.value,
        Number(transactionAmount.value),
        selectedCategory.value,
      ];
      route.name === "Income"
        ? dealStore.addIncome(dealStore.countIncome, ...data)
        : dealStore.addCost(dealStore.countCosts, ...data);
      localStorage.setItem("incomeList", JSON.stringify(dealStore.incomeList));
      localStorage.setItem("costsList", JSON.stringify(dealStore.costsList));
    };

    return {
      categoryList,
      selectCategoryHandler,
      transactionText,
      transactionName,
      transactionNameHandler,
      transactionAmountHandler,
      confirmTransaction,
      transactionDate,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  transition: all 0.2s ease-in;
  .v-popup,
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
  }
  .overlay {
    background: #000;
    opacity: 0.4;
  }
  .v-popup {
    z-index: 2;
    &__inner {
      padding: 24px 50px 180px 50px;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
        0px 4px 16px rgba(51, 51, 51, 0.08);
      border-radius: 12px;
      min-width: 350px;
      position: relative;
      &__title {
        font-size: 28px;
        line-height: 24px;
        color: #2c3e50;
        text-align: center;
        margin: 0 0 20px;
      }
      &__close {
        position: absolute;
        cursor: pointer;
        top: 5px;
        right: 10px;
      }
    }
  }
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.row {
  align-items: center;
  gap: 20px;
}
</style>
