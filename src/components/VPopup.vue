<template>
  <Transition name="modal">
    <div v-if="isShow" class="popup-wrapper">
      <div class="v-popup">
        <div class="v-popup__inner">
          <span @click="$emit('close')" class="v-popup__inner__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <path
                fill="#F44336"
                d="M21.5 4.5H26.501V43.5H21.5z"
                transform="rotate(45.001 24 24)"
              />
              <path
                fill="#F44336"
                d="M21.5 4.5H26.5V43.501H21.5z"
                transform="rotate(135.008 24 24)"
              />
            </svg>
          </span>
          <h3 class="v-popup__inner__title">
            {{ title }}
          </h3>
          <div class="v-popup__inner__inputs">
            <v-select
              name="category"
              placeholder="Категория"
              :options="categoryList"
              option-title="name"
              option-value="name"
              @select="selectCategoryHandler($event)"
            />
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { useDealsStore } from "@/store/dealsStore";
import { useRoute } from "vue-router";
import VSelect from "./VSelect.vue";
export default {
  name: "VPopup",
  props: {
    title: String,
    isShow: Boolean,
  },
  components: {
    VSelect,
  },
  setup() {
    const dealStore = useDealsStore();
    const route = useRoute();
    const categoryList = computed(() =>
      route.name === "Income"
        ? dealStore.categoryIncomeList
        : dealStore.categoryCostsList
    );
    const selectedCategory = ref({});

    const selectCategoryHandler = (event: any) => {
      return (selectedCategory.value = categoryList.value.find(
        (item: any) => item.name === event.value
      ));
    };

    return { categoryList, selectCategoryHandler };
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  transition: all 0.4s ease-in;
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
</style>
