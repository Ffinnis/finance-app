<template>
    <ul>
        <li v-if="type === 'costs'" v-for="cost in dealStore.getCostsList" :key="cost.id">
            <h3>
                Название: {{cost.name}}
            </h3>
            <p>
                Дата: {{cost.date}}
            </p>
            <p>
                Сумма: {{cost.amount}}
            </p>
            <p>
                Категория: {{cost.category.name}}
            </p>
        </li>
        <li v-else v-for="income in dealStore.getIncomeList" :key="income.id">
            <h3>
                Название: {{income.name}}
            </h3>
            <p>
                Дата: {{income.date}}
            </p>
            <p>
                Сумма: {{income.amount}}
            </p>
            <p>
                Категория: {{income.category.name}}
            </p>
        </li>
    </ul>
</template>

<script>
    import {useDealsStore} from "../store/dealsStore";

    export default {
        name: "DealListComponent",
        props: {
            type: String,
        },
        setup(props) {
            const dealStore = useDealsStore()

            return {
                dealStore
            }
        }
    }
</script>

<style scoped>

</style>