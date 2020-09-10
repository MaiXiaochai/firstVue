<template>
    <div>
        <div id="nav">
            <h3>主面板</h3>
            <!--  路由导航  -->
            <router-link to="/dashboard/home">首页</router-link>
            <router-link to="/dashboard/about">关于</router-link>
            <router-link to="/dashboard/mine">联系我们</router-link>

            <!--  设置路由出口  -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    #nav a {
        font-size: 18px;
        color: #484848;
        margin: 0 10px;
    }
    #nav a.router-link-exact-active {
        color: #e9232c;
    }
</style>
