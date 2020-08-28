<template>
    <div id="app">
        <p>以下为组件</p>
        <hr>
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--        <Test></Test>-->
        <!--        <ComputedAndWatch/>-->
        <!--        <ClassAndStyle />-->
        <!--        <IfAndShow/>-->
        <!--        <ListRender/>-->
        <!--        <ListFilterAndSort/>-->
        <!--        <OtherInstruct/>-->
        <!--        <DemoEvent></DemoEvent>-->
        <!--        <MyFilters></MyFilters>-->
        <!--        <TransitionDemo></TransitionDemo>-->
        <!--        <AnimateDemo></AnimateDemo>-->
        <!--        <AnimateDemoThird></AnimateDemoThird>-->
        <LifeCircle></LifeCircle>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import Test from './components/Test.vue'
    // import ComputedAndWatch from './components/ComputedAndWatch.vue'
    // import ClassAndStyle from "./components/ClassAndStyle";
    // import IfAndShow from "./components/IfAndShow";
    // import ListRender from "./components/ListRender";
    // import ListFilterAndSort from "./components/ListFilterAndSort";
    // import OtherInstruct from "./components/OtherInstruct";
    // import DemoEvent from "./components/DemoEvent";
    // import MyFilters from "./components/MyFilters";
    // import TransitionDemo from "./components/TransitionDemo";
    // import AnimateDemo from "./components/AnimateDemo";
    // import AnimateDemoThird from "./components/AnimateDemoThird";
    import LifeCircle from "./components/LifeCircle";

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            // Test,
            // ComputedAndWatch,
            // ClassAndStyle,
            // IfAndShow,
            // ListRender,
            // ListFilterAndSort,
            // OtherInstruct,
            // DemoEvent,
            // MyFilters,
            // TransitionDemo,
            // AnimateDemo,
            // AnimateDemoThird,
            LifeCircle
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
