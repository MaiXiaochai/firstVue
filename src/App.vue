<template>
  <div id="app">
    <CounterDemo></CounterDemo>
    <router-view></router-view>
  </div>
</template>

<script>
  import CounterDemo from "./components/CounterDemo";
export default {
  name: 'app',
  components: {
    CounterDemo,
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
