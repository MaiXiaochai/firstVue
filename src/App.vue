<template>
    <div  id="app" class="todo-container">
        <div class="todo-wrap">
            <ToDoHeader ref="header"/>
            <ToDoList :todo-data="todoData" :del-item-in-list="delTodo"/>
            <ToDoFooter :todoDataInFooter="todoData" :selectAllInApp="selectAllTodo"
                        :delFinishedTodos = "delFinishedTodos"/>
        </div>
    </div>
</template>

<script>
    import ToDoHeader from "./components/ToDoHeader";
    import ToDoList from "./components/ToDoList";
    import ToDoFooter from "./components/ToDoFooter";

    // 引入工具类
    import localStorageUtil from "./utils/localStorageUtil";

    export default {
        name: 'App',
        components: {
            ToDoHeader,
            ToDoList,
            ToDoFooter,
        },
        data() {
            return {
                todoData: localStorageUtil.readTodos()
            }
        },
        mounted() {
            // 绑定自定义事件(addTodoInHeader) 监听
            this.$refs.header.$on('addTodoInHeader', this.addTodo);
        },

        methods: {
            // 插入一条数据
            addTodo(todo) {
                this.todoData.unshift(todo);
            },

            // 根据索引删除一条记录
            delTodo(theIndex) {
                //splice(start, deleteCount)
                this.todoData.splice(theIndex, 1);
            },

            // 是否选中所有的 todoItem
            selectAllTodo(isChecked) {
                this.todoData.forEach(todo => {
                    todo.finished = isChecked;
                });
            },
            // 清除已完成选项
            delFinishedTodos() {
                this.todoData = this.todoData.filter(todo => !todo.finished);
            }
        },
        watch: {
        //    深度监视
            todoData: {
                handler: localStorageUtil.saveTodos,
                deep: true, // 深度监视，不仅仅能监视到数组里的改变，还能监视到数组对象的属性的改变
                immediate: false
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
