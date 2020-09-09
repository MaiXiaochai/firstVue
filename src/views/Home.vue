<template>
    <div>
        <h2>首页</h2>
        <!--路由导航-->
        <ul>
            <li><router-link to="/home/news">新闻</router-link></li>
            <li><router-link to="/home/shop">购物</router-link></li>
        </ul>
        <!--配置路由出口-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
