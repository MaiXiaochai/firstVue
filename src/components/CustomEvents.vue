<template>
    <div>
        <p>自定义事件，子组件向父组件传值</p>
        <button @click="btnClick">删除父组件P标签</button>
    </div>
</template>

<script>
    export default {
        name: "CustomEvents",
        methods: {
            btnClick() {
                // 发射事件
                // 告诉父组件，我点击了按钮
                // 还可以传递参数
                this.$emit('btnClick', {name: 'maixiaochai', gender: 'female'});
            }
        }
    }
</script>

<style scoped>

</style>
