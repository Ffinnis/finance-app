<template>
    <div class="new-deal">
        <button @click="popupChanger">
            Создать новую транзакцию
        </button>
        <div v-if="popupHandler" class="popup-transaction">
            <TransactionPopupComponent :type="type"/>
            <div @click="popupChanger" class="close-popup">
                X
            </div>
        </div>
    </div>
</template>

<script>
    import TransactionPopupComponent from "./Transaction/TransactionPopupComponent.vue";
    import {ref, watch, computed} from "vue";
    import {useDealsStore} from "@/store/dealsStore";

    export default {
        name: "NewDealComponent",
        components: {TransactionPopupComponent},
        props: {
            type: String
        },
        setup() {
            const dealStore = useDealsStore()
            const popupHandler = ref(false)

            const popupChanger = () => {
                popupHandler.value = !popupHandler.value
            }

            const costsList = computed(() => dealStore.getCostsList)
            const incomeList = computed(() => dealStore.getIncomeList)
            const categoryCostsList = computed(() => dealStore.getCategoryCostsList)
            const categoryIncomeList = computed(() => dealStore.getCategoryIncomeList)
            const countCosts = computed(() => dealStore.getCountCosts)
            const countIncome = computed(() => dealStore.getCountIncome)

            watch([costsList.value, incomeList.value, categoryCostsList.value, categoryIncomeList.value], ([costsList, incomeList, categoryCostsList, categoryIncomeList]) => {
                localStorage.setItem("costsList", JSON.stringify(costsList))
                localStorage.setItem("incomeList", JSON.stringify(incomeList))
                localStorage.setItem("categoryCostsList", JSON.stringify(categoryCostsList))
                localStorage.setItem("categoryIncomeList", JSON.stringify(categoryIncomeList))
                localStorage.setItem("countCosts", countCosts.value)
                localStorage.setItem("incomeCosts", countIncome.value)
            })

            return {
                popupHandler,popupChanger
            }
        }
    }
</script>

<style scoped>
    .close-popup{
        position: absolute;
        cursor: pointer;
        z-index: 21;
        top: -170px;
        left: -150px;
    }
    .popup-transaction{
        position: fixed;
        padding: 10px;
        width: 280px;
        left: 50%;
        margin-left: -150px;
        height: 180px;
        top: 50%;
        margin-top: -100px;
        background: #FFF;
        z-index: 20;
    }
    .popup-transaction:after {
        position: fixed;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        z-index: -2;
    }

    .popup-transaction:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #FFF;
        z-index: -1;
    }
    .new-deal{
        margin: 0 0 20px;
    }
</style>