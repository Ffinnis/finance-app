<template>
    <select name="category" id="category">
        <option selected value="">
            По категории
        </option>
        <option v-if="type === 'costs'" v-for="category in costsCategories" :key="category.id" v-bind:value="category.name">
            {{category.name}}
        </option>
        <option v-else v-for="category in incomeCategories" :key="category.id" v-bind:value="category.name">
            {{category.name}}
        </option>
    </select>
</template>

<script lang="ts">
    import {useDealsStore} from "@/store/dealsStore";
    import { computed } from 'vue'
    import { categoryDealTypes } from "../../interfaces/dealTypes.interface";
    export default {
        name: "CategoryFilterComponent",
        props: {
            type: String
        },
        setup() {
            const DealStore = useDealsStore()

            const costsCategories = computed((): categoryDealTypes => DealStore.getCategoryCostsList)
            const incomeCategories = computed((): categoryDealTypes => DealStore.getCategoryIncomeList)
            return{
                costsCategories, incomeCategories
            }
        }
    }
</script>

<style scoped>

</style>