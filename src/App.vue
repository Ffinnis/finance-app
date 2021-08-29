<script lang="ts">
  import NavigationComponent from "./components/NavigationComponent.vue";
  import { onMounted } from 'vue'
  import {useDealsStore} from "./store/dealsStore";
  export default {
    components: {NavigationComponent},
    setup() {
      const dealStore = useDealsStore()

      onMounted(() => {
        dealStore.setCategoryList()
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
  ul{
    list-style-type: none;
  }
  .container{
    max-width: 1220px;
    margin: 0 auto;
  }
</style>
