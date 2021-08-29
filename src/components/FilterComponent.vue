<template>
    <NameFilterComponent />
    <SortFilterComponent />
    <CategoryFilterComponent />
</template>

<script>

    import NameFilterComponent from "./Filters/NameFilterComponent.vue";
    import SortFilterComponent from "./Filters/SortFilterComponent.vue";
    import CategoryFilterComponent from "./Filters/CategoryFilterComponent.vue";
    export default {
        name: "FilterComponent",
        components: {CategoryFilterComponent, SortFilterComponent, NameFilterComponent},
    }
</script>

<style scoped>

</style>