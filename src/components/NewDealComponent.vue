<template>
    <button @click="newDeal">
        Создать новую транзакцию
    </button>
</template>

<script>
    import {useDealsStore} from "../store/dealsStore";

    export default {
        name: "NewDealComponent",
        setup() {
            const dealStore = useDealsStore()

            const category = {
                id: 0,
                name: 'zalupa'
            }

            const newDeal = () => {
                dealStore.addCost(0, '12.07.2006', 'Buy a Home', '12000', category)
            }

            return {
                newDeal
            }
        }
    }
</script>

<style scoped>

</style>