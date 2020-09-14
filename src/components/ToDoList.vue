<template>
    <div>
        <ul class="todo-main">
            <ToDoItem
                    v-for="(todo, index) in todoData"
                    :todo="todo"
                    :item-index="index"
            />
        </ul>
    </div>
</template>

<script>
    import localStorageUtil from "../utils/localStorageUtil";
    import ToDoItem from "./ToDoItem";
    import {mapState} from "vuex";

    export default {
        name: "ToDoList",
        components: {
            ToDoItem,
        },
        computed: {
            ...mapState(['todoData'])
        },
        watch: {
            todoData: {
                deep: true,
                handler: localStorageUtil.saveTodos
            }
        }
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0;
        border: 1px solid #DDD;
        border-radius: 2px;
        padding: 0;
    }
</style>
