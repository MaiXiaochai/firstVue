<template>
    <div>
        <p>第{{count}}次点击</p>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    export default {
        name: "CounterDemo",
        computed: {
            count() {
                return this.$store.state.count;
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
            }
        }
    }
</script>

<style scoped>

</style>
