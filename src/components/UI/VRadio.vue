<template>
  <div class="row">
    <div
      v-for="item in items"
      :key="item[itemValue] || item.value"
      class="radio-button"
    >
      <input
        @change="$emit('select', item.value)"
        :id="item.value"
        type="radio"
        hidden
        class="radio-button__input"
        name="category"
      />
      <label :for="item.value" class="radio-button__label">
        {{ item[itemText] || item.text }}
        <span class="radio-button__label__checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "VRadio",
  props: {
    items: Array,
    itemValue: String,
    itemText: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.row {
  align-items: center;
  justify-content: space-between;
}
.radio-button {
  margin: 15px 0;
  &__label {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #2c3e50;
    font-size: 16px;
    line-height: 12px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      .radio-button__label__checkmark {
        background-color: #bdbdbd;
      }
    }
    &__checkmark {
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: relative;
      content: "";
      background-color: #e1e1e1;
      border-radius: 50%;
      transition: background-color 0.2s ease;
      &:before {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ffffff;
        content: "";
        left: 33%;
        top: 33%;
        opacity: 0;
        transition: opacity 0.1s ease-out;
      }
    }
  }
  &__input {
    &:checked {
      ~ .radio-button__label .radio-button__label__checkmark {
        background-color: #1d81d1;
        &:before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
