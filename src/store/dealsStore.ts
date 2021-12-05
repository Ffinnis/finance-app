import { defineStore } from 'pinia'
import {dealTypes, categoryDealTypes} from "../interfaces/dealTypes.interface";

export const useDealsStore = defineStore('dealsStore', {
    state: () => ({
        costsList: JSON.parse(<string>localStorage.getItem("costsList")) || Array<dealTypes>(),
        categoryCostsList: JSON.parse(<string>localStorage.getItem("categoryCostsList")) ||  [
            {
                id: 0,
                name: 'Еда и напитки'
            },
            {
                id: 1,
                name: 'Коммунальные расходы'
            },
            {
                id: 2,
                name: 'Интернет и сотовая связь'
            },
            {
                id: 3,
                name: 'Развлечения'
            },
            {
                id: 4,
                name: 'Подарки'
            },
            {
                id: 5,
                name: 'Одежда'
            },
            {
                id: 6,
                name: 'Парфюмерия и косметика'
            }
        ],
        categoryIncomeList: JSON.parse(<string>localStorage.getItem("categoryIncomeList")) || [
            {
                id: 0,
                name: 'Зарплата'
            },
            {
                id: 1,
                name: 'Подарки'
            },
            {
                id: 2,
                name: 'Лотерея'
            },
            {
                id: 3,
                name: 'Инвестиции'
            },
            {
                id: 4,
                name: 'Бизнес'
            },
        ],
        incomeList: JSON.parse(<string>localStorage.getItem("incomeList")) || Array<dealTypes>(),
        countCosts: Number(localStorage.getItem("countCosts")) || 0,
        countIncome: Number(localStorage.getItem("countIncome")) || 0
    }),
    getters: {
        getCostsList(state) {
            return state.costsList
        },
        getCategoryCostsList(state) {
            return state.categoryCostsList
        },
        getIncomeList(state) {
            return state.incomeList
        },
        getCategoryIncomeList(state) {
            return state.categoryIncomeList
        },
        getCostsListLength(state) {
            return state.costsList.length
        },
        getIncomeListLength(state) {
            return state.incomeList.length
        },
        getCountCosts(state) {
            return state.countCosts
        },
        getCountIncome(state) {
            return state.countIncome
        }
    },
    actions: {
        addCost(id: number, date: string, name: string, amount: number, category: categoryDealTypes) {
            this.costsList.push({
                id: id,
                date: date,
                name: name,
                amount: amount,
                category: category
            })
        },
        addIncome(id: number, date: string, name: string, amount: number, category: categoryDealTypes) {
            this.incomeList.push({
                id: id,
                date: date,
                name: name,
                amount: amount,
                category: category
            })
        },
        addCostsCategory(id: number, name: string): void {
            this.categoryCostsList.push({
                id: id,
                name: name
            })
        },
        addIncomeCategory(id: number, name: string): void {
            this.categoryIncomeList.push({
                id: id,
                name: name
            })
        },
        addCountCosts() {
            this.countCosts++
        },
        addCountIncome() {
            this.countIncome++
        },

        deleteCost(id: number) {
            this.costsList.find(cost => {
                if (cost.id === id) {
                    this.costsList.splice(this.costsList.indexOf(cost), 1)
                }
            })
        },
        deleteIncome(id: number) {
            this.incomeList.find(income => {
                if (income.id === id) {
                    this.incomeList.splice(this.incomeList.indexOf(income), 1)
                }
            })
        },

        loadCostsList(arr: Array<dealTypes>) {
            this.costsList = arr
        },
        loadIncomeList(arr: Array<dealTypes>) {
            this.incomeList = arr
        },
        loadCategoryCostsList(arr: Array<dealTypes>) {
            this.categoryCostsList = arr
        },
        loadCategoryIncomeList(arr: Array<dealTypes>) {
            this.categoryIncomeList = arr
        },
        loadCountCosts(num: number) {
            this.countCosts = num
        },
        loadCountIncome(num: number) {
            this.countIncome = num
        },
    }
})