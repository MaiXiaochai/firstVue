<template>
    <div class="todo-header">
        <label>
            <input
                type="text"
                placeholder="请输入内容，按回车键确认"
                v-model="title"
                @keyup.enter="addItem"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: "ToDoHeader",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addItem() {
                // 1. 判断值是否为空
                const title = this.title.trim();
                if (!title) {
                    alert('输入的内容不能为空!');
                    return;
                }

                // 2. 生成一个 todo对象
                // 按 ES6语法，这里的title可以直接放上去，不用写 key
                let todo = {
                    title,
                    finished: false
                };

                // 3. 调用 addTodoInHeader，插入数据
                // this.addTodoInHeader(todoItem);
                // 这里改成用事件方式，addTodoInHeader 在这里只是一个名字而已，事件的名字
                // this.$emit('addTodoInHeader', todoItem);

                // 3.2
                this.$store.dispatch('addTodo', todo);

                // 4. 清空输入框
                this.title = '';
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #CCC;
        border-radius: 4px;
        padding: 4px 7px;
        outline: none;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(255, 0, 0, 0.8);
        box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
    }
</style>
