import { defineStore } from 'pinia'
import {dealTypes, categoryDealTypes} from "../interfaces/dealTypes.interface";

export const useDealsStore = defineStore('dealsStore', {
    state: () => ({
        costsList: Array<dealTypes>(),
        categoryCostsList: Array<categoryDealTypes>()
    }),
    getters: {
        getCostsList(state) {
            return state.costsList
        },
        getCategoryCostsList(state) {
            return state.categoryCostsList
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
        }
    }
})