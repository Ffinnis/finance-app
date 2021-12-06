<template>
    <div class="filters">
        <NameFilterComponent :type="type" @filter="nameFilterHandler($event)"/>
        <SortFilterComponent @change="filterByHandler($event)"/>
        <CategoryFilterComponent :type="type"/>
    </div>
</template>

<script>

    import NameFilterComponent from "./Filters/NameFilterComponent.vue";
    import SortFilterComponent from "./Filters/SortFilterComponent.vue";
    import CategoryFilterComponent from "./Filters/CategoryFilterComponent.vue";
    import {computed, ref} from 'vue'
    import {useDealsStore} from "@/store/dealsStore";
    export default {
        name: "FilterComponent",
        props: {
            type: String
        },
        emits: ['filter'],
        setup(props, context) {
          const filteredList = ref([])
          const dealsStore = useDealsStore()

          const storeListByType = computed(() => props.type === 'costs' ? dealsStore.costsList : dealsStore.incomeList)

          const nameFilterHandler = (event) => {
              return context.emit('filter', filteredList.value = event)
          }

          const filterByHandler = (event) => {
              if(event === 'price') {
                  if (filteredList.value.length === 0) {
                      return context.emit('filter', storeListByType.value.sort((a,b) => a.amount-b.amount).reverse())
                  }
                  return context.emit('filter', filteredList.value.sort((a,b) => a.amount-b.amount).reverse())
              }
              if(event === 'name') {
                  if (filteredList.value.length === 0) {
                      return context.emit('filter', storeListByType.value.sort((a,b) => a.name.localeCompare(b.name)))
                  }
                  return context.emit('filter', filteredList.value.sort((a,b) => a.name.localeCompare(b.name)))
              }
              if(event === 'date') {
                  if (filteredList.value.length === 0) {
                      return context.emit('filter', storeListByType.value.sort((a,b) => new Date(b.date) - new Date(a.date)))
                  }
                  return context.emit('filter', filteredList.value.sort((a,b) => new Date(b.date) - new Date(a.date)))
              }
          }

          return {
              filteredList, nameFilterHandler, filterByHandler
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