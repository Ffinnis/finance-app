<template>
    <h1>Income</h1>
    <FilterComponent />
    <NewDealComponent type="income"/>
    <DealListComponent type="income"/>
</template>

<script>
    import FilterComponent from "../components/FilterComponent.vue";
    import NewDealComponent from "../components/NewDealComponent.vue";
    import DealListComponent from "../components/DealListComponent.vue";
    export default {
        name: "Income",
        components: {DealListComponent, NewDealComponent, FilterComponent}
    }
</script>

<style scoped>

</style>