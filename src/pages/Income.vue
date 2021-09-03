<template>
    <h1>Ваши доходы</h1>
    <FilterComponent type="income"/>
    <NewDealComponent type="income"/>
    <DealListComponent v-show="dealStore.getIncomeListLength > 0" type="income"/>
</template>

<script>
    import FilterComponent from "@/components/FilterComponent.vue";
    import NewDealComponent from "@/components/NewDealComponent.vue";
    import DealListComponent from "@/components/DealListComponent.vue";
    import {useDealsStore} from "@/store/dealsStore";
    export default {
        name: "Income",
        components: {DealListComponent, NewDealComponent, FilterComponent},
        setup() {
            const dealStore = useDealsStore()

            return {
                dealStore
            }
        }
    }
</script>

<style scoped>

</style>