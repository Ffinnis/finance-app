<template>
    <ul v-if="dealListLength > 0">
        <li>

        </li>
    </ul>
    <h4 v-else>
        Вы не добавили никаких затрат, чтобы добавить нажмите на кнопку "Создать новую транзакцию"
    </h4>
</template>

<script>
    import {useDealsStore} from "../store/dealsStore";
    import {computed} from "vue";

    export default {
        name: "DealListComponent",
        setup() {
            const dealStore = useDealsStore()

            const dealListLength = computed(() => dealStore.getCostsList.length)

            return {
                dealListLength
            }
        }
    }
</script>

<style scoped>

</style>