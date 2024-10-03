<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'scss/main.scss';

body {
  margin: 0 !important;
  padding: 0 !important;
  font-family: Arial, sans-serif;
  background-color: #FAFAFA;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>