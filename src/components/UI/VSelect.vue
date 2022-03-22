<template>
  <div class="v-select">
    <p class="v-select__label">{{ label }}</p>
    <div @click="isDropped = !isDropped" class="v-select__wrapper input">
      <div class="v-select__wrapper__text">
        {{ selectValue }}
      </div>
      <span class="v-select__wrapper__arrow"></span>
      <Transition name="dropdown">
        <div class="v-select__wrapper__dropdown" v-if="isDropped">
          <div
            v-for="(item, idx) in options"
            :key="item[optionValue]"
            class="v-select__wrapper__dropdown__item"
            @click="selectValueHandler(idx)"
          >
            {{ item[optionTitle] }}
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "VSelect",
  props: {
    name: String,
    label: String,
    placeholder: String,
    options: Array,
    optionTitle: String,
    optionValue: String,
  },
  setup(props: Record<string, unknown>, { emit }) {
    const selectValue = ref(props.placeholder);
    const isDropped = ref(false);
    const options = ref(props.options);

    const selectValueHandler = (index: number) => {
      selectValue.value = options.value[index].name;
      return emit("select", selectValue);
    };

    return { selectValue, isDropped, selectValueHandler };
  },
};
</script>

<style lang="scss" scoped>
.v-select {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    &__text {
      color: #2c3e50;
      font-size: 16px;
      line-height: 12px;
      font-weight: 500;
    }
    &__arrow {
      border: solid #201f1f;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
    &__dropdown {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 100%;
      border-radius: 4px;
      background: #ffffff;
      box-shadow: 0px 19px 14px 4px rgba(34, 60, 80, 0.2);
      transform-origin: top;
      z-index: 3;
      &__item {
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color, color 0.5s ease-out;
        &:hover {
          background-color: #a2e1e4;
          color: #111111;
        }
      }
    }
  }
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.3s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: scaleY(0) translateY(-50px);
}
</style>
