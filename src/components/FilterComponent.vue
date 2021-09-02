<template>
    <div class="filters">
        <NameFilterComponent />
        <SortFilterComponent />
        <CategoryFilterComponent />
    </div>
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
    .filters{
        display: flex;
        align-items: center;
        justify-content: space-between;;
        max-width: 800px;
        margin: 10px auto;
    }
</style>