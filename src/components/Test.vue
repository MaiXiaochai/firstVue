<template>
    <div>
        <h1>Test 组件</h1>
        <h3>强制数据绑定</h3>
        <a v-bind:href="site">学习</a>
        <!-- 对于像 study 这样的函数调用，不用加小括号，除非带参数 -->
        <p><button @click="study('MaiXiaochai')">点击,弹窗</button></p>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                site:'https://github.com/MaiXiaochai'
            }
        },
        // methods 中存放当前组件用到的函数
        methods: {
            study(name) {
                alert(`${name}, 加油！`);
            }
        }
    }
</script>

<style scoped>

</style>
