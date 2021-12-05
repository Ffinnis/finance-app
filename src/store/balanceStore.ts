import { defineStore } from 'pinia'

export const useBalanceStore = defineStore('useBalanceStore', {
    state: () => ({
        balance: Number(localStorage.getItem("userBalance")) || 0
    }),
    getters: {
        getBalance(state): number {
            return Number(state.balance)
        }
    },
    actions: {
        setBalance(number: number): number {
            return this.balance = number
        },
        addBalance(amount: number): number {
            return this.balance += amount;
        },
        removeBalance(amount: number): number {
            return this.balance -= amount;
        }
    }
})