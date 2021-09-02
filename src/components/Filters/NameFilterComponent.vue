<template>
    <div class="name-filter">
        <label for="filter-name"></label>
        <input id="filter-name" v-model="filterName" placeholder="Введите название транзакции" type="text">
    </div>
</template>

<script>
    import { ref } from 'vue'
    import {useDealsStore} from "../../store/dealsStore";
    export default {
        name: "NameFilterComponent",
        setup() {
            const filterName = ref('')
            const dealStore = useDealsStore()

            console.log(dealStore.costsList)

            return {
                filterName
            }
        }
    }
</script>

<style scoped>

</style>