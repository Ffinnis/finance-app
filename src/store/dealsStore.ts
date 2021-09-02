import { defineStore } from 'pinia'
import {dealTypes, categoryDealTypes} from "../interfaces/dealTypes.interface";

export const useDealsStore = defineStore('dealsStore', {
    state: () => ({
        costsList: Array<dealTypes>(),
        categoryCostsList: Array<categoryDealTypes>(),
        categoryIncomeList: Array<categoryDealTypes>(),
        incomeList: Array<dealTypes>(),
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
        setCategoryList() {
            this.categoryCostsList = [
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
            ]
            this.categoryIncomeList = [
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
            ]
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
        }
    }
})