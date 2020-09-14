<template>
    <div class="todo-footer">
        <label>
            <input slot="isCheckAll" type="checkbox" v-model="selectAllOrNot"/>
        </label>
        <span slot="finish">已完成{{finishedCount}}件/总计{{todosCount}}件</span>
        <button slot="delete" class="btn-warning" @click="delFinishedTodos">清除已完成任务</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "ToDoFooter",
        computed: {
            ...mapGetters(['todosCount', 'finishedCount', 'isCheckAll']),
            selectAllOrNot: {
                // 决定是否勾选
                get() {
                    return this.isCheckAll;
                },
                // 这里一旦调用set，元素对象会传值给set--布尔值
                set(value) {
                    this.selectAllTodo(value);
                }
            }
        },

        methods: {
            ...mapActions(['selectAllTodo', 'delFinishedTodos'])
        }
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
