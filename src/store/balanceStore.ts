import { defineStore } from 'pinia'

export const useBalanceStore = defineStore('useBalanceStore', {
    state: () => ({
        balance: Number(localStorage.getItem("balance")) || 0
    }),
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