<template>
    <div class="container">
        <table class='table'>
            <thead>
            <tr>
                <th>
                    Название
                </th>
                <th>
                    Сумма
                </th>
                <th>
                    Категория
                </th>
                <th>
                    Дата
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="type === 'costs'" v-for="cost in dealStore.getCostsList" :key="cost.id">
                <th>
                    {{cost.name}}
                </th>
                <td>
                    {{cost.amount}}
                </td>
                <td>
                    {{cost.category.name}}
                </td>
                <td>
                    {{cost.date}}
                </td>
            </tr>
            <tr v-else v-for="income in dealStore.getIncomeList" :key="income.id">
                <th>
                    {{income.name}}
                </th>
                <td>
                    {{income.amount}}
                </td>
                <td>
                    {{income.category.name}}
                </td>
                <td>
                    {{income.date}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {useDealsStore} from "@/store/dealsStore";

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
    .table{
        width: 100%;
        border-collapse: collapse;
        color: #151515;
    }
    tbody tr:nth-child(odd) {
        background: white;
    }
    tbody tr:nth-child(even) {
        background: #E8E6D1;
    }
    tbody tr{
        border: 20px solid transparent;
    }
</style>