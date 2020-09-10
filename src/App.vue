<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  width: 300px;
  height: 500px;
  background-color: orange;
  margin: 10px auto;
}
h2 {
  color: red;
}
</style>
