<template>
    <select class="input" @change="$emit('filter', filterTransactionList)" v-model="sortType" name="sort" id="sort">
        <option value="default">
            Стандартно
        </option>
        <option value="date">
            По дате
        </option>
        <option value="amount">
            По сумме
        </option>
        <option value="name">
            По названию
        </option>
    </select>
</template>

<script>
    import { ref, computed } from 'vue'
    import {useDealsStore} from "@/store/dealsStore";
    import _ from 'lodash'
    export default {
        name: "SortFilterComponent",
        props: {
          type: String,
          transactionList: Array,
        },
        emits: ['filter'],
        setup(props) {
            const sortType = ref('default')
            const dealsStore = useDealsStore()

            const transactionList = computed(() => {
                return props.transactionList.length ? props.transactionList :
                    props.type === 'costs' ? dealsStore.costsList : dealsStore.incomeList
            })

            const filterTransactionList = computed(() => {
                return _.sortBy(transactionList.value, (item) => {
                    return item[sortType.value]
                }).reverse()
            })

            return {
                sortType, filterTransactionList
            }
        }
    }
</script>

<style scoped>

</style>