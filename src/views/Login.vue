<template>
    <div>
        <h2>登录界面</h2>
        <button @click="Login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            Login() {
                // 1.登录成功
                window.isLogin = true;
                // 2. 获取回调地址
                const redirectUrl = this.$route.query.redirect;
                if(redirectUrl){ // 有回调地址
                    this.$router.push(redirectUrl);
                }else{  //回调地址为空，去首页
                    this.$router.replace('/');
                }
            }
        }
    }
</script>

<style scoped>

</style>
