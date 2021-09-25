import { defineStore } from 'pinia'

export const useStepStore = defineStore('useStepStore', {
    state: () => ({
        stepOne: false,
        stepTwo: false
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
        loadStepOne(option: boolean): boolean {
            return this.stepOne = option;
        },
        setStepTwo(option: boolean): boolean {
            return this.stepTwo = option;
        },
        loadStepTwo(option: boolean): boolean {
            return this.stepTwo = option;
        }
    }
})