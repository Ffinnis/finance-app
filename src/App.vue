<script>
  import NavigationComponent from "./components/NavigationComponent.vue";
  export default {
    components: {NavigationComponent},
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
    padding: 45px 100px;
    background: #FFF;
    top: -9000px;
    left: 400px;
    z-index: 20;
    -webkit-box-shadow: 0px 8px 18px 0px rgb(34 60 80 / 20%);
    -moz-box-shadow: 0px 8px 18px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 8px 18px 0px;
    animation-name: showPopup;
    animation-duration: 0.5s;
    animation-delay: 100ms;
    animation-fill-mode: both;
  }
  .popup--close{
    animation-name: showPopup;
    animation-direction: reverse;
    animation-duration: 0.5s;
    animation-delay: 100ms;
    animation-fill-mode: both;
  }
  .primary-btn{
    background: #459873;
    border-radius: 4px;
    outline: none;
    padding: 12px;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    transition: 0.1s linear;
  }
  .primary-btn:hover{
    background: #45856d;
  }
  .primary-btn:active{
    background: #30624f;
  }
  .primary-btn:focus{
    border: 2px solid rgba(17, 17, 17, 0.48);
  }
  button, select{
    cursor: pointer;
  }
  .secondary-btn{
    border: 2px solid rgba(17, 17, 17, 0.48);
    border-radius: 4px;
    padding: 10px;
    background: #fff;
    transition: all 0.15s linear;
  }
  .secondary-btn:hover{
    background: rgba(110, 65, 226, 0.04);
    border: 2px solid #6E41E2;
  }
  .secondary-btn:active{
    background: rgba(110, 65, 226, 0.16);
    border: 2px solid #6e41e2;
  }
  .secondary-btn:focus{
    border: 2px solid #532cb7;
    background: rgba(110, 65, 226, 0.16);
  }
  input{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    border-radius: 4px;
    border: none;
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
  @keyframes showPopup {
    from{
      top: -9000px;
    }
    to{
      top: 60px
    }
  }
</style>
