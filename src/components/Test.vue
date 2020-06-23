<template>
    <div>
        <h1>Test 组件</h1>
        <h3>强制数据绑定</h3>
        <a v-bind:href="site">学习</a>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                site:'https://github.com/MaiXiaochai'
            }
        }
    }
</script>

<style scoped>

</style>
