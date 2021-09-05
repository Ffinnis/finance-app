import { defineStore } from 'pinia'

export const useStepStore = defineStore('useStepStore', {
    state: () => ({
        stepOne: false
    }),
    getters: {
       getStepOne: (state): boolean => {
           return state.stepOne;
       }
    },
    actions: {
        setStepOne(option: boolean): boolean {
            return this.stepOne = option;
        },
        loadStepOne(option: boolean): boolean {
            return this.stepOne = option;
        }
    }
})