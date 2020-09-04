<template>
    <li
            @mouseenter="itemShow(true)"
            @mouseleave="itemShow()"
            :style="{backgroundColor: bgColor}"
    >
        <label>
            <input type="checkbox" v-model="todo.finished"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-warning" v-show="isShowDelButton" @click="delItem">删除</button>
    </li>
</template>

<script>
    export default {
        name: "ToDoItem",
        props: {
            todo: Object,
            itemIndex: Number, // 当前任务在总任务数组中的下标
            delItemInItem: Function
        },
        data() {
            return {
                isShowDelButton: false,
                // 默认背景白色
                bgColor: '#FFF',
            }
        },
        methods: {
            itemShow(isShow = false) {
                // 控制按钮显示和隐藏
                this.isShowDelButton = isShow;
                // 控制背景颜色
                this.bgColor = isShow ? '#DDD' : '#FFF';
            },
            delItem() {
                if (window.confirm(`确定删除 ${this.todo.title}吗？`)) {
                    this.delItemInItem(this.itemIndex);
                }
            },
        }
    }

</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #DDD;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    /* 继承了一些index.css的样式，丑，修改一下*/
    li button {
        padding: 4px 10px;
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>
