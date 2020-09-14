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
    export default {
        name: "CounterDemo",
        computed: {
            count() {
                return this.$store.state.count;
            },
            oddOrEven() {
                return this.$store.getters.oddOrEven;
            }
        },
        methods: {
            increment() {
                // this.$store.commit('INCREMENT');
                this.$store.dispatch('increment');
            },
            decrement() {
                // this.$store.commit('DECREMENT');
                this.$store.dispatch('decrement');
            },
            incrementEven() {
                this.$store.dispatch('incrementEven');
            },
            incrementAsync() {
                this.$store.dispatch('incrementAsync');
            }
        }
    }
</script>

<style scoped>

</style>
