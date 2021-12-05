<template>
    <div class="container">
        <h1>Ваши расходы</h1>
        <FilterComponent type="costs"/>
        <NewDealComponent type="costs"/>
        <DealListComponent v-show="dealStore.costsList.length > 0" type="costs"/>
    </div>
</template>

<script>
    import FilterComponent from "@/components/FilterComponent.vue";
    import DealListComponent from "@/components/DealListComponent.vue";
    import NewDealComponent from "@/components/NewDealComponent.vue";
    import {useDealsStore} from "@store/dealsStore";
    export default {
        name: "Costs",
        components: {NewDealComponent, DealListComponent, FilterComponent},
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