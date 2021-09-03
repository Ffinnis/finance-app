<script>
  import NavigationComponent from "./components/NavigationComponent.vue";
  import { onMounted } from 'vue'
  import {useDealsStore} from "./store/dealsStore";
  export default {
    components: {NavigationComponent},
    setup() {
      const dealStore = useDealsStore()

      onMounted(() => {
        dealStore.setCategoryList()
        const costsList = JSON.parse(localStorage.getItem("costsList"))
        const incomeList = JSON.parse(localStorage.getItem("incomeList"))
        const categoryIncomeList = JSON.parse(localStorage.getItem("categoryIncomeList"))
        const categoryCostsList = JSON.parse(localStorage.getItem("categoryCostsList"))
        const countCosts = localStorage.getItem("countCosts")
        const countIncome = localStorage.getItem("countIncome")
        if (costsList?.length > 0) {
          dealStore.loadCostsList(costsList)
        }
        if (incomeList?.length > 0) {
          dealStore.loadIncomeList(incomeList)
        }
        if (categoryIncomeList?.length > 0) {
          dealStore.loadCategoryIncomeList(categoryIncomeList)
        }
        if (categoryCostsList?.length > 0) {
          dealStore.loadCategoryCostsList(categoryCostsList)
        }
        if (countCosts) {
          dealStore.loadCountCosts(parseInt(countCosts))
        }
        if (countIncome) {
          dealStore.loadCountIncome(parseInt(countIncome))
        }
      })
    }
  }
</script>

<template>
  <NavigationComponent/>
  <router-view/>
</template>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Lato', "Fira Code", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  overflow-x: hidden;
}
  ul{
    list-style-type: none;
  }
  .container{
    max-width: 1220px;
    margin: 0 auto;
  }
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
</style>
