<template>
  <div class="input__wrapper">
    <label class="label" :for="name">{{ label }}</label>
    <input
      @input="$emit('inputValue', $event.target.value)"
      :id="name"
      :type="type"
      class="input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "VInput",
  props: {
    name: String,
    type: String,
    label: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
