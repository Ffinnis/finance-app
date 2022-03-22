<template>
  <div class="navigation-wrapper">
    <div class="container">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Главная</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/income">Прибыль</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/costs">Расходы</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
};
</script>

<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.navigation-wrapper {
  padding: 20px 0;
  background: #fff;
  box-shadow: 2px 2px 6px 0 rgba(34, 60, 80, 0.2);
  margin: 0 0 30px;
}
.nav-link {
  color: #518805;
  font-size: 21px;
  text-decoration: none;
  font-weight: bold;
  line-height: 20px;
}
</style>
