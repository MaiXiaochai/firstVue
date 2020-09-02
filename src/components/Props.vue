<template>
    <div>
        <p>组件通信</p>

        <h4>姓名：    {{name}}</h4>
        <h4>年龄：    {{age}}</h4>
        <h4>Other：  {{person}}</h4>

        <button @click="logPerson">弹窗提醒</button>
    </div>
</template>

<script>
    export default {
        name: "Props",
        // props 在这里相当于定义了两个函数的形参
        // props: ['name', 'age']

        // // 带类型约束
        // props: {
        //     name: String,
        //     age: Number,
        //     person: Object,
        //     logPerson: Function
        // },

        // 更加精细的写法
        props: {
            name: {type: String, required: true, default: 'GitHub'},
            age: Number,
            person: Object,
            logPerson: Function
        }
    }
</script>

<style scoped>

</style>
