import {useDealsStore} from "@/store/dealsStore";
import {useStepStore} from '@store/stepStore'
import {useBalanceStore} from "@/store/balanceStore";

export function loaded() {
    const dealStore = useDealsStore()
    const stepStore = useStepStore()
    const balanceStore = useBalanceStore()
    dealStore.setCategoryList()
    const costsList = JSON.parse(<string>localStorage.getItem("costsList"))
    const incomeList = JSON.parse(<string>localStorage.getItem("incomeList"))
    const categoryIncomeList = JSON.parse(<string>localStorage.getItem("categoryIncomeList"))
    const categoryCostsList = JSON.parse(<string>localStorage.getItem("categoryCostsList"))
    const countCosts = localStorage.getItem("countCosts")
    const countIncome = localStorage.getItem("countIncome")
    const stepOne = localStorage.getItem("stepOne")
    const stepTwo = localStorage.getItem("stepTwo")
    const userBalance = localStorage.getItem("userBalance")
    if (costsList?.length > 0) {
        dealStore.loadCostsList(costsList)
    }
    if (incomeList?.length > 0) {
        dealStore.loadIncomeList(incomeList)
    }
    if (categoryIncomeList?.length > 0) {
        dealStore.loadCategoryIncomeList(categoryIncomeList)
    }
    if (categoryCostsList?.length > 0) {
        dealStore.loadCategoryCostsList(categoryCostsList)
    }
    if (countCosts) {
        dealStore.loadCountCosts(parseInt(countCosts))
    }
    if (countIncome) {
        dealStore.loadCountIncome(parseInt(countIncome))
    }
    if (stepOne) {
        const step = !!stepOne
        stepStore.loadStepOne(step)
    }
    if (stepTwo) {
        const step = !!stepTwo
        stepStore.loadStepTwo(step)
    }
    if (userBalance) {
        balanceStore.setBalance(parseInt(userBalance))
    }
}