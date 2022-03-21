<template>
    <div class="name-filter">
        <label for="filter-name"></label>
        <input @input="$emit('filter', filterTransactionList)" id="filter-name" class="input" v-model="filterName" placeholder="Введите название транзакции" type="text">
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

<style lang="scss">
    .name-filter {
        @media(max-width: 768px) {
            width: 75%;
        }
        .input {
            @media(max-width: 768px) {
                width: 100%;
            }
        }
    }
</style>