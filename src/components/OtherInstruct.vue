<template>
    <div>
        <!--    v-text 和 v-html    -->
        <!--    拼接式的    -->
        <p>使用双层花括号,可以拼接其它字符内容：{{content}}</p>
        <!--    覆盖式的    -->
        <p v-text="content"></p>
        <p v-html="content"></p>

        <!--    v-pre    -->
        <p v-pre>{{intro}}</p>
        <p v-cloak>{{message}}</p>
        <p v-once>{{name}}</p>
        <p>{{name}}</p>
        <label>
            <input type="text" placeholder="请输入姓名" v-model="name">
        </label>
    </div>
</template>

<script>
    export default {
        name: "OtherInstruct",
        data() {
            return {
                content: '<a href="https://github.com/MaiXiaochai">v-text指令测试<a/>',
                intro: 'v-pre测试',
                message: '加油，坚持就是胜利！',
                name: 'hello'
            }
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>
