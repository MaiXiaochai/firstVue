<template>
    <div id="app" class="todo-container">
        <div class="todo-wrap">
            <ToDoHeader/>
            <ToDoList/>
            <ToDoFooter/>
            <button @click="reqData">获取网络数据</button>
        </div>
    </div>
</template>

<script>
    import ToDoHeader from "./components/ToDoHeader";
    import ToDoList from "./components/ToDoList";
    import ToDoFooter from "./components/ToDoFooter";

    import axios from 'axios'

    export default {
        name: 'App',
        components: {
            ToDoHeader,
            ToDoList,
            ToDoFooter,
        },
        methods: {
            reqData() {
                const url = "https://v0.yiketianqi.com/api";
                // .then 表示成功了回调其中函数
                axios.get(url).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #DDDDDD;
        border-radius: 5px;
    }
</style>
