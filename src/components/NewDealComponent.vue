<template>
    <div class="new-deal">
        <button class="primary-btn" @click="popupChanger">
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
    import {useBalanceStore} from "@/store/balanceStore";

    export default {
        name: "NewDealComponent",
        components: {TransactionPopupComponent},
        props: {
            type: String
        },
        setup() {
            const dealStore = useDealsStore()
            const balanceStore = useBalanceStore()
            const popupHandler = ref(false)
            const popupClass = ref('')

            const popupChanger = () => {
                popupHandler.value = !popupHandler.value
            }

            const costsList = computed(() => dealStore.costsList)
            const incomeList = computed(() => dealStore.incomeList)
            const categoryCostsList = computed(() => dealStore.categoryCostsList)
            const categoryIncomeList = computed(() => dealStore.categoryIncomeList)
            const countCosts = computed(() => dealStore.countCosts)
            const countIncome = computed(() => dealStore.countIncome)
            const userBalance = computed(() => balanceStore.balance)

            watch([costsList.value, incomeList.value, categoryCostsList.value, categoryIncomeList.value, userBalance], ([costsList, incomeList, categoryCostsList, categoryIncomeList, userBalance]) => {
                localStorage.setItem("costsList", JSON.stringify(costsList))
                localStorage.setItem("incomeList", JSON.stringify(incomeList))
                localStorage.setItem("categoryCostsList", JSON.stringify(categoryCostsList))
                localStorage.setItem("categoryIncomeList", JSON.stringify(categoryIncomeList))
                localStorage.setItem("countCosts", countCosts.value)
                localStorage.setItem("countIncome", countIncome.value)
                localStorage.setItem("userBalance", JSON.stringify(userBalance))
            })

            return {
                popupHandler,popupChanger, popupClass
            }
        }
    }
</script>

<style scoped>
    .close-popup{
        position: absolute;
        cursor: pointer;
        z-index: 21;
        left: 38%;
        animation-name: showPopup;
        animation-duration: 0.5s;
        animation-fill-mode: both;
    }
    .new-deal{
        margin: 0 0 20px;
    }
    @keyframes showPopup {
        from{
            top: -1000px;
        }
        to{
            top: -170px
        }
    }
    .popup-transaction{
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>