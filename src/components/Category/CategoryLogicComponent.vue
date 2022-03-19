<template>
    <div class="name-input">
        <label for="name">Введите название категории</label>
        <input class="input" v-model="categoryName" id="name" name="name" type="text">
    </div>
    <div class="type-input">
        <label>
            <input v-model="categoryType" name="categoryType" value="costs" type="radio">
            Расходы
        </label>
        <label>
            <input v-model="categoryType" name="categoryType" value="income" type="radio">
            Доходы
        </label>
    </div>
    <button class="danger-btn" @click="addCategory">
        Добавить категорию
    </button>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import {useDealsStore} from "@/store/dealsStore"
    export default {
        name: "CategoryLogicComponent",
        setup() {
            const categoryName = ref('')
            const categoryType = ref('')
            const dealStore = useDealsStore()

            const addCategory = (): void => {
                if(categoryName.value !== '' && categoryType) {
                    if(categoryType.value === 'costs') {
                        dealStore.addCostsCategory(dealStore.getCategoryCostsList.length, categoryName.value)
                    } else {
                        dealStore.addIncomeCategory(dealStore.getCategoryIncomeList.length, categoryName.value)
                    }
                }
            }

            return {
                categoryName, categoryType, addCategory
            }
        }
    }
</script>

<style scoped>
.name-input, .type-input{
    margin: 20px 0;
}
.danger-btn{
    margin: 0 20px 0 0;
}
.input{
    padding: 8px 12px;
    margin: 0 0 0 10px;
}
</style>