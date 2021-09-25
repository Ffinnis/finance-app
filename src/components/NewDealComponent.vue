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
                setTimeout(() => {
                    popupHandler.value = !popupHandler.value
                }, 800)
            }

            const costsList = computed(() => dealStore.getCostsList)
            const incomeList = computed(() => dealStore.getIncomeList)
            const categoryCostsList = computed(() => dealStore.getCategoryCostsList)
            const categoryIncomeList = computed(() => dealStore.getCategoryIncomeList)
            const countCosts = computed(() => dealStore.getCountCosts)
            const countIncome = computed(() => dealStore.getCountIncome)
            const userBalance = computed(() => balanceStore.getBalance)

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
        top: -9000px;
        left: 415px;
        animation-name: showPopup;
        animation-duration: 0.5s;
        animation-delay: 100ms;
        animation-fill-mode: both;
    }
    .new-deal{
        margin: 0 0 20px;
    }
    @keyframes showPopup {
        from{
            top: -9000px;
        }
        to{
            top: 75px
        }
    }
</style>