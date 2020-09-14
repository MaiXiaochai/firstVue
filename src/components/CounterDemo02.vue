<template>
    <div>
        <p>第{{count}}次点击，{{oddOrEven}}</p>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <button @click="incrementEven">偶数时+1</button>
        <button @click="incrementAsync">异步+1</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex';
    export default {
        name: "CounterDemo",
        computed: {
            // 延展的方式拿出属性或者方法，简化代码
            ...mapGetters(['oddOrEven']),
            ...mapState(['count']),
        },
        methods: {
            // 延展的方式拿出属性或者方法，简化代码
            ...mapActions([
                'increment',
                'decrement',
                'incrementEven',
                'incrementAsync'
            ]),
        }
    }
</script>

<style scoped>

</style>
