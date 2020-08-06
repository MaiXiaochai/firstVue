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
        <p ref="fish">一条鱼</p>
        <button @click="log">输出内容</button>

        <!--    使用全局指令    -->
        <p v-upper-word="word1"></p>
        <!--    使用局部指令    -->
        <p v-lower-word="word2"></p>
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
                name: 'hello',
                word1: 'Hello world!',
                word2: 'GO, GO, GO!'
            }
        },
        methods: {
            log() {
                console.log(this.$refs.fish);
                console.log(this.$refs.fish.innerHTML);
            }
        },
        // 自定义局部指令
        directives: {
            'lower-word'(el, binding) {
                console.log(el, binding);
                el.textContent = binding.value.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>
