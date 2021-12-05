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
            <tr v-if="type === 'costs'" v-for="cost in dealStore.costsList" :key="cost.id">
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
                <td>
                    <button class="delete" @click="deleteTransaction('costs', cost.id, cost.amount)">
                        Удалить
                    </button>
                </td>
            </tr>
            <tr v-if="type === 'income'" v-for="income in dealStore.incomeList" :key="income.id">
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
                <td>
                    <button class="delete" @click="deleteTransaction('income', income.id, income.amount)">
                        Удалить
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {useDealsStore} from "../store/dealsStore";
    import {useBalanceStore} from "../store/balanceStore";

    export default {
        name: "DealListComponent",
        props: {
            type: String,
        },
        setup() {
            const dealStore = useDealsStore()
            const balanceStore = useBalanceStore()

            const deleteTransaction = (type: string, id: number, amount: number): void => {
                if (type === 'costs') {
                    dealStore.deleteCost(id)
                    balanceStore.addBalance(amount)
                }
                if (type === 'income') {
                    dealStore.deleteIncome(id)
                    balanceStore.removeBalance(amount)
                }
            }

            return {
                dealStore, deleteTransaction
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
    .delete{
        cursor: pointer;
        color: red
    }
    .input-delete{
        display: none
    }
</style>