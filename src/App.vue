<template>
  <div id="app">
    <!--  路由导航  -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/mine">联系我们</router-link>

    <!--  设置路由出口  -->
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
