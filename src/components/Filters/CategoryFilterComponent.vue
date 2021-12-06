<template>
    <select name="category" id="category">
        <option selected value="">
            По категории
        </option>
        <option v-for="category in categoryList" :key="category.id" v-bind:value="category.name">
            {{category.name}}
        </option>
    </select>
</template>

<script lang="ts">
    import {useDealsStore} from "@/store/dealsStore";
    import { computed } from 'vue'
    export default {
        name: "CategoryFilterComponent",
        props: {
            type: String
        },
        setup(props: any) {
            const DealStore = useDealsStore()

            const categoryList = computed(() => {
                if(props.type === 'income') {
                    return DealStore.categoryIncomeList
                }
                return DealStore.categoryCostsList
            })

            return{
                categoryList
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