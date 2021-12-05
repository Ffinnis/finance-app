import { defineStore } from 'pinia'

export const useStepStore = defineStore('useStepStore', {
    state: () => ({
        stepOne: JSON.parse(<string>localStorage.getItem("stepOne")) || false,
        stepTwo: JSON.parse(<string>localStorage.getItem("stepTwo")) || false
    }),
    actions: {
        setStepOne(option: boolean): boolean {
            return this.stepOne = option;
        },
        setStepTwo(option: boolean): boolean {
            return this.stepTwo = option;
        },
    }
})