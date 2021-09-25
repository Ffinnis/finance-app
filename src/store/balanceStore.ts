import { defineStore } from 'pinia'

export const useBalanceStore = defineStore('useBalanceStore', {
    state: () => ({
        balance: 0
    }),
    getters: {
        getBalance(state): number {
            return state.balance
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