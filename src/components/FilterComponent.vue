<template>
    <div class="filters">
        <NameFilterComponent :transactionList="filteredList" :type="type" @filter="filterHandler($event)"/>
        <SortFilterComponent :transactionList="filteredList" :type="type" @filter="filterHandler($event)"/>
        <CategoryFilterComponent :transactionList="filteredList" :type="type" @filter="filterHandler($event)"/>
    </div>
</template>

<script>

    import NameFilterComponent from "./Filters/NameFilterComponent.vue";
    import SortFilterComponent from "./Filters/SortFilterComponent.vue";
    import CategoryFilterComponent from "./Filters/CategoryFilterComponent.vue";
    import {ref} from 'vue'
    export default {
        name: "FilterComponent",
        props: {
            type: String
        },
        emits: ['filter'],
        setup(props, context) {
          const filteredList = ref([])
          const filterHandler = (event) => {
              return context.emit('filter', filteredList.value = event)
          }

          return {
              filteredList, filterHandler
          }
        },
        components: {CategoryFilterComponent, SortFilterComponent, NameFilterComponent},
    }
</script>

<style scoped>
    .filters{
        display: flex;
        align-items: center;
        justify-content: space-between;;
        max-width: 800px;
        margin: 10px auto;
    }
</style>