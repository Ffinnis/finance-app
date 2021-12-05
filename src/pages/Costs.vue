<template>
    <div class="container">
        <h1>Ваши расходы</h1>
        <FilterComponent @filter="filteredList = $event" type="costs"/>
        <NewDealComponent type="costs"/>
        <DealListComponent v-show="dealStore.costsList.length > 0" :listOfDeal="filteredList.length > 0 ? filteredList : dealStore.incomeList"/>
    </div>
</template>

<script>
    import FilterComponent from "@/components/FilterComponent.vue";
    import DealListComponent from "@/components/DealListComponent.vue";
    import NewDealComponent from "@/components/NewDealComponent.vue";
    import {useDealsStore} from "@store/dealsStore";
    import {ref} from "vue";
    export default {
        name: "Costs",
        components: {NewDealComponent, DealListComponent, FilterComponent},
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