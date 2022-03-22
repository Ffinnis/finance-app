<template>
  <v-popup
    @close="$emit('close')"
    title="Создать новую категорию"
    :isShow="isShow"
  >
    <v-input
      name="categoryName"
      type="text"
      label="Введите название категории"
      placeholder="Работа"
      @input-value="categoryTitle = $event"
    />
    <h4 class="type__title">Выберите тип</h4>
    <v-radio @select="selectedType = $event" :items="typeItems" />
    <div style="justify-content: center; margin: 10px 0 0" class="row">
      <button @click="addCategory" class="primary-btn">
        Создать категорию
      </button>
    </div>
  </v-popup>
</template>

<script lang="ts">
import VPopup from "./UI/VPopup.vue";
import VInput from "./UI/VInput.vue";
import VRadio from "./UI/VRadio.vue";
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { useDealsStore } from "@/store/dealsStore";
export default {
  name: "CategoryPopup",
  components: { VRadio, VPopup, VInput },
  props: {
    isShow: Boolean,
  },
  setup(props: any, { emit }) {
    const dealStore = useDealsStore();

    const typeItems = [
      {
        value: "Income",
        text: "Доходы",
      },
      {
        value: "Cost",
        text: "Расходы",
      },
    ];

    const selectedType = ref("");
    const categoryTitle = ref("");

    const isAllFilled = computed(
      () => !!selectedType.value && !!categoryTitle.value
    );

    const addCategory = () => {
      if (!isAllFilled.value) {
        return notify({
          title: "Ошибка",
          type: "error",
          text: "Заполните все поля",
        });
      }
      emit("close");
      return selectedType.value === "Income"
        ? dealStore.addIncomeCategory(
            dealStore.categoryIncomeList.length,
            categoryTitle.value
          )
        : dealStore.addCostsCategory(
            dealStore.categoryCostsList.length,
            categoryTitle.value
          );
    };

    return { typeItems, selectedType, categoryTitle, addCategory };
  },
};
</script>

<style lang="scss" scoped>
.type__title {
  margin: 20px 0 0;
  color: #2c3e50;
}
</style>
