<template>
    <div class="popup-wrapper">
        <h3>
            Новая транзакция
        </h3>
        <div class="inputs">
            <div class="top">
                <label for="category">Категории</label><select v-model="categoryValue" name="category" id="category">
                <option v-if="type === 'costs'" v-for="category in costsCategories" :key="category.id" :value="category.id">
                    {{category.name}}
                </option>

                <option v-else v-for="category in incomeCategories" :key="category.id" :value="category.id">
                    {{category.name}}
                </option>
            </select>
                <button @click="popupChangerCategory">Создать новую категорию</button>
            </div>
            <label for="name-input">Введите название операции</label>
            <input v-model="nameValue" id="name-input" name="name" type="text">
            <label v-if="type === 'costs'" for="summary">Введите сумму потраченных средств</label>
            <label v-else for="summary">Введите сумму заработанных средств</label>
            <input v-model="summary" id="summary" name="summary" type="number">
        </div>
        <button v-if="type === 'costs'" @click="addTransaction('costs')">
            Добавить
        </button>
        <button v-else @click="addTransaction('income')">
            Добавить
        </button>
    </div>
    <CategoryPopupComponent v-if="popupHandlerCategory"/>
    <div v-if="popupHandlerCategory" @click="popupChangerCategory" class="close-popup">
        X
    </div>
</template>

<script>
    import {useDealsStore} from "@/store/dealsStore";
    import {computed, ref} from "vue";
    import CategoryPopupComponent from "@/components/Category/CategoryPopupComponent.vue";

    export default {
        name: "TransactionPopupComponent",
        components: {CategoryPopupComponent},
        props: {
            type: String
        },
        setup(props) {
            const DealStore = useDealsStore()
            const categoryValue = ref(null)
            const nameValue = ref('')
            const summary = ref(0)

            const costsCategories = computed(() => DealStore.getCategoryCostsList)
            const costsList = computed(() => DealStore.getCostsList.length)

            const incomeCategories = computed(() => DealStore.getCategoryIncomeList)
            const incomeList = computed(() => DealStore.getIncomeList.length)

            let today = new Date()
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;

            const addTransaction = (type) => {
                if(type === 'costs') {
                    DealStore.addCost(DealStore.getCountCosts, today, nameValue.value, summary.value, costsCategories.value[categoryValue.value])
                    DealStore.addCountCosts()
                } else {
                    DealStore.addIncome(DealStore.getCountIncome, today, nameValue.value, summary.value, incomeCategories.value[categoryValue.value])
                    DealStore.addCountIncome()
                }
            }

            const popupHandlerCategory = ref(false)

            const popupChangerCategory = () => {
                popupHandlerCategory.value = !popupHandlerCategory.value
            }

            return {
                costsCategories, categoryValue, summary, nameValue, addTransaction, incomeCategories, incomeList, popupHandlerCategory, popupChangerCategory
            }
        }
    }
</script>

<style scoped>
    .close-popup{
        position: absolute;
        cursor: pointer;
        z-index: 23;
        top: -170px;
        left: -150px;
    }
    .inputs{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .top{
        display: flex;
        align-items: center;
    }
</style>