<template>
    <h1>Ваши доходы</h1>
    <FilterComponent @filter="filteredList = $event" type="income"/>
    <NewDealComponent type="income"/>
    <DealListComponent v-show="dealStore.incomeList.length > 0" :listOfDeal="filteredList.length > 0 ? filteredList : dealStore.incomeList"/>
</template>

<script>
    import FilterComponent from "@/components/FilterComponent.vue";
    import NewDealComponent from "@/components/NewDealComponent.vue";
    import DealListComponent from "@/components/DealListComponent.vue";
    import {useDealsStore} from "@/store/dealsStore";
    import {ref} from "vue";
    export default {
        name: "Income",
        components: {DealListComponent, NewDealComponent, FilterComponent},
        setup() {
            const dealStore = useDealsStore()

            const filteredList = ref([])

            return {
                dealStore, filteredList
            }
        }
    }
</script>

<style scoped>

</style>