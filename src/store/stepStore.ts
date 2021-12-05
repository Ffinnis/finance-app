import { defineStore } from 'pinia'

export const useStepStore = defineStore('useStepStore', {
    state: () => ({
        stepOne: JSON.parse(<string>localStorage.getItem("stepOne")) || false,
        stepTwo: JSON.parse(<string>localStorage.getItem("stepTwo")) || false
    }),
    getters: {
       getStepOne: (state): boolean => {
           return state.stepOne;
       },
        getStepTwo: (state): boolean => {
            return state.stepTwo;
        }
    },
    actions: {
        setStepOne(option: boolean): boolean {
            return this.stepOne = option;
        },
        setStepTwo(option: boolean): boolean {
            return this.stepTwo = option;
        },
    }
})