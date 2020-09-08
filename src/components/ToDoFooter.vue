<template>
    <div class="todo-footer">
        <label>
            <slot name="isCheckAll"></slot>
        </label>
        <slot name="finish"></slot>
        <slot name="delete"></slot>
    </div>
</template>

<script>
    export default {
        name: "ToDoFooter",
    }
</script>

<style scoped>
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
