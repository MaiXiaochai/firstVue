<template>
    <div id="app">
        <ClassAndStyle />
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--        <Test></Test>-->
<!--        <ComputedAndWatch/>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import Test from './components/Test.vue'
    // import ComputedAndWatch from './components/ComputedAndWatch.vue'
    import ClassAndStyle from "./components/ClassAndStyle";

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            // Test,
            // ComputedAndWatch,
            ClassAndStyle
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
