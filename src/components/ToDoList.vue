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
    import ToDoItem from "./ToDoItem";
    export default {
        name: "ToDoList",
        components: {
            ToDoItem,
        },

        props: {
            todoData: Array
        },
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0;
        border: 1px solid #DDD;
        border-radius: 2px;
        padding: 0;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #DDD;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
