<template>
    <h1>Costs</h1>
    <FilterComponent />
    <NewDealComponent />
    <DealListComponent />
</template>

<script>
    import FilterComponent from "../components/FilterComponent.vue";
    import DealListComponent from "../components/DealListComponent.vue";
    import NewDealComponent from "../components/NewDealComponent.vue";
    export default {
        name: "Costs",
        components: {NewDealComponent, DealListComponent, FilterComponent}
    }
</script>

<style scoped>

</style>