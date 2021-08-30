<template>
    <select name="category" id="category">
        <option selected value="">
            По категории
        </option>
        <option v-for="category in costsCategories" :key="category.id" v-bind:value="category.name">
            {{category.name}}
        </option>
    </select>
</template>

<script>
    import {useDealsStore} from "../../store/dealsStore";
    import { computed } from 'vue'
    export default {
        name: "CategoryFilterComponent",
        setup() {
            const DealStore = useDealsStore()

            const costsCategories = computed(() => DealStore.getCategoryCostsList)

            return{
                costsCategories
            }
        }
    }
</script>

<style scoped>

</style>