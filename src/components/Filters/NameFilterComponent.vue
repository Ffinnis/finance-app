<template>
    <div class="name-filter">
        <label for="filter-name"></label>
        <input @input="$emit('filter', filterTransactionList)" id="filter-name" class="name-filter-input" v-model="filterName" placeholder="Введите название транзакции" type="text">
    </div>
</template>

<script>
    import {computed, ref} from 'vue'
    import {useDealsStore} from "@/store/dealsStore";

    export default {
        name: "NameFilterComponent",
        props: {
            type: String,
            transactionList: Array,
        },
        emits: ['filter'],
        setup(props) {
            const filterName = ref('')
            const dealsStore = useDealsStore()

            const transactionList = computed(() => {
                if(filterName.value) {
                    return props.transactionList.length ? props.transactionList :
                        props.type === 'costs' ? dealsStore.costsList : dealsStore.incomeList
                }
                return props.type === 'costs' ? dealsStore.costsList : dealsStore.incomeList
            })

            const filterTransactionList = computed(() => {
                return transactionList.value.filter(item => {
                    return item.name.toLowerCase().includes(filterName.value.toLowerCase())
                })
            })

            return {
                filterName, transactionList, filterTransactionList
            }
        }
    }
</script>

<style>
    .name-filter-input{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
        border-radius: 4px;
        border: none;
        padding: 16px;
        font-size: 16px;
        line-height: 24px;
        color: rgba(17, 17, 17, 0.48);
        transition: all 0.45s ease-in;
        outline: none;
    }
    .name-filter-input:hover{
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 56px rgba(51, 51, 51, 0.16);
    }
    .name-filter-input:focus{
        color: #111111;
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    }
</style>