<template>
    <div class="popup-wrapper">
        <h3>
            Новая транзакция
        </h3>
        <div class="inputs">
            <label for="category">Категории</label><select v-model="categoryValue" name="category" id="category">
                <option v-if="type === 'costs'" v-for="category in costsCategories" :key="category.id" :value="category.id">
                    {{category.name}}
                </option>

                <option v-else v-for="category in incomeCategories" :key="category.id" :value="category.id">
                    {{category.name}}
                </option>
            </select>
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
</template>

<script>
    import {useDealsStore} from "../../store/dealsStore";
    import {computed, ref} from "vue";

    export default {
        name: "TransactionPopupComponent",
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
                    DealStore.addCost(costsList.value, today, nameValue.value, summary.value, costsCategories.value[categoryValue.value])
                } else {
                    DealStore.addIncome(incomeList.value, today, nameValue.value, summary.value, incomeCategories.value[categoryValue.value])
                }
            }

            return {
                costsCategories, categoryValue, summary, nameValue, addTransaction, incomeCategories, incomeList
            }
        }
    }
</script>

<style scoped>
    .popup-wrapper{
        position: fixed;
        padding: 10px;
        width: 600px;
        left: 42%;
        margin-left: -150px;
        height: 450px;
        top: 30%;
        margin-top: -100px;
        background: #FFF;
        z-index: 20;
        -webkit-box-shadow:  0 0 0 9999px rgba(0, 0, 0, 0.5);
        box-shadow:  0 0 0 9999px rgba(0, 0, 0, 0.5);
    }
    .inputs{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>