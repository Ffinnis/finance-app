<template>
    <div class="popup-wrapper">
        <h3>Создать новую категорию</h3>
        <CategoryLogicComponent />
    </div>
</template>

<script lang="ts">
    import CategoryLogicComponent from "./CategoryLogicComponent.vue";
    export default {
        name: "CategoryPopupComponent",
        components: {CategoryLogicComponent},
    }
</script>

<style scoped>
    .popup-wrapper{
        z-index: 22;
    }
</style>