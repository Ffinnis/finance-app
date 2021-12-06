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
            const el = this.costsList.findIndex((cost) => {
                return cost.id === id
            })
            if(el !== -1) {
                return this.costsList.splice(el, 1)
            }
        },
        deleteIncome(id: number) {
            const el = this.incomeList.findIndex((income) => {
                return income.id === id
            })
            if(el !== -1) {
                return this.incomeList.splice(el, 1)
            }
        },
    }
})