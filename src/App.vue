<template>
    <div  id="app" class="todo-container">
        <div class="todo-wrap">
            <ToDoHeader />
            <ToDoList :todo-data="todoData" :del-item-in-list="delTodo"/>
            <ToDoFooter />
        </div>
    </div>
</template>

<script>
    import ToDoHeader from "./components/ToDoHeader";
    import ToDoList from "./components/ToDoList";
    import ToDoFooter from "./components/ToDoFooter";

    export default {
        name: 'App',
        components: {
            ToDoHeader,
            ToDoList,
            ToDoFooter,
        },
        data() {
            return {
                todoData: [
                    {title: 'Vue组件通信学习1', finished: false},
                    {title: 'Vue组件通信学习2', finished: false},
                    {title: 'Vue组件通信学习3', finished: false},
                    {title: 'Vue实例练习1', finished: false},
                    {title: 'Vue实例练习2', finished: false},
                ],
            }
        },

        methods: {
            // 根据索引删除一条记录
            delTodo(theIndex) {
                //splice(start, deleteCount)
                this.todoData.splice(theIndex, 1);
            }
        }
    }
</script>

<style>
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #DDDDDD;
        border-radius: 5px;
    }
</style>
