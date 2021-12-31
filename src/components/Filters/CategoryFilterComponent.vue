<template>
    <select @change="$emit('filter', filterTransactionList)" v-model="selectedCategory" name="category" id="category">
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
    select{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
        border-radius: 4px;
        border: none;
        color: rgba(17, 17, 17, 0.48);
        font-size: 16px;
        line-height: 24px;
        padding: 16px;
        transition: box-shadow 0.45s ease-in, color 0.1s linear;
        outline: none;
        min-width: 249px;
    }
    select:hover{
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24);
    }
    select:focus{
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24);
        color: #111111;
    }
</style>