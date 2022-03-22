import { defineStore } from "pinia";

export const useBalanceStore = defineStore("useBalanceStore", {
  state: () => ({
    balance: Number(localStorage.getItem("balance")) || 0,
  }),
  actions: {
    setBalance(number: number): void {
      this.balance = number;
      return localStorage.setItem("balance", `${this.balance}`);
    },
    addBalance(amount: number): void {
      this.balance += amount;
      return localStorage.setItem("balance", `${this.balance}`);
    },
    removeBalance(amount: number): void {
      this.balance -= amount;
      return localStorage.setItem("balance", `${this.balance}`);
    },
  },
});
