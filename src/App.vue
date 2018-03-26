<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  /*background-color: black;*/
  background-image: url("./assets/background1.jpg");
  background-position: center;
  background-size: cover;
}
ul {
  li {

  }
}
#app {
  font-family: 'roboto_monoregular',monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #141414;
  margin-top: 60px;
}
</style>
