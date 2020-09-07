<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isCheckAll"/>
        </label>
        <span>已完成{{finishedCount}}件/总计{{todoDataInFooter.length}}件</span>
        <button class="btn-warning" @click="delFinishedTodos">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "ToDoFooter",
        props: {
            todoDataInFooter: Array,
            selectAllInApp: Function,
            delFinishedTodos: Function
        },
        computed: {
            finishedCount() {
                return this.todoDataInFooter.reduce(
                    (total, todo) => total + (todo.finished ? 1 : 0), 0
                );
            },
            isCheckAll: {
                get() {
                    // 注意这里直接写函数名 finishedCount，不用调用
                    return this.finishedCount === this.todoDataInFooter.length && this.todoDataInFooter.length > 0;
                },
                // value 在复选框点击的时候，会自动传入
                set(value) {
                    this.selectAllInApp(value);
                }
            }
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
