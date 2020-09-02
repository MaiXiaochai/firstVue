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
        <!--        <LifeCircle></LifeCircle>-->

        <!--   子组件用 props接收父组件值的时候，父组件中，除了参数类型为字符串的之外，其它类型的参数都要进行动态数据绑定，
               如:age=666, age 为 Number    -->
        <!--        <Props name="maixiaochai" :age=666 :person="p" :log-person="logPerson"></Props>-->
        <p class="word">父组件内容，被子组件操作删除</p>
        <CustomEvents></CustomEvents>
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
    // import LifeCircle from "./components/LifeCircle";
    // import Props from "./components/Props";
    import CustomEvents from "./components/CustomEvents";

    export default {
        name: 'App',
        data() {
            return {
                p: {
                    name: 'Maixiaochai',
                    age: 666
                }
            }
        },

        methods: {
            logPerson() {
                alert('Coming!');
            }
        },

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
            // LifeCircle,
            // Props,
            CustomEvents
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
    .word {

    }
</style>
