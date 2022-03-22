<script>
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  components: { NavigationComponent },
};
</script>

<template>
  <notifications />
  <NavigationComponent />
  <router-view />
</template>

<style></style>
