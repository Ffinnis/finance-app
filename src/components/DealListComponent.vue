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
            <tr v-for="item in listOfDeal" :key="item.id+item.name">
                <th>
                    {{item.name}}
                </th>
                <td>
                    {{item.amount}}
                </td>
                <td>
                    {{item.category.name}}
                </td>
                <td>
                    {{item.date}}
                </td>
                <td>
                    <button class="delete" @click="deleteTransaction(currentRoute, item.id, item.amount)">
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
    import {useRouter} from "vue-router";

    export default {
        name: "DealListComponent",
        props: {
            listOfDeal: Array
        },
        setup() {
            const dealStore = useDealsStore()
            const balanceStore = useBalanceStore()

            const router = useRouter()
            const currentRoute = router.currentRoute.value.path.replace(/[\/\\]/g,'')


            const deleteTransaction = (type: string, id: number, amount: number): void => {
                console.log(type, id)
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
                dealStore, deleteTransaction, currentRoute
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
    .input-delete{
        display: none
    }
</style>