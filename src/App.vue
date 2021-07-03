<template lang="pug">
div#app
  img(src="./assets/logo.png", alt="alt")
  h1 welcome from pug & sass
</template>

<script>

export default {
  name: 'App',
}
</script>

<style style="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  h1{
    color: red;
  }
}
</style>
