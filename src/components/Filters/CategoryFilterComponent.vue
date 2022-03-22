<template>
    <select class="input" @change="$emit('filter', filterTransactionList)" v-model="selectedCategory" name="category" id="category">
        <option value="default">
            Стандартно
        </option>
        <option v-for="category in categoryList" :key="category.id" v-bind:value="category.name">
            {{category.name}}
        </option>
    </select>
</template>

<script lang="ts">
    import {useDealsStore} from "@/store/dealsStore";
    import { computed, ref } from 'vue'
    import _ from 'lodash'
    export default {
        name: "CategoryFilterComponent",
        props: {
            type: String,
            transactionList: Array,
        },
        emits: ['filter'],
        setup(props: any) {
            const dealsStore = useDealsStore()

            const selectedCategory = ref('default')

            const categoryList = computed(() => {
                if(props.type === 'income') {
                    return dealsStore.categoryIncomeList
                }
                return dealsStore.categoryCostsList
            })
            const transactionList = computed(() => {
                return props.transactionList.length ? props.transactionList :
                    props.type === 'costs' ? dealsStore.costsList : dealsStore.incomeList
            })

            const filterTransactionList = computed(() => {
                return _.filter(transactionList.value, (item: any) => {
                    return item.category.name === selectedCategory.value
                })
            })

            return{
                categoryList, selectedCategory, filterTransactionList
            }
        }
    }
</script>

<style>

</style>