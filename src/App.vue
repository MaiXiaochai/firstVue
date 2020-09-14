<template>
  <div  id="app" class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader ref="header"/>
      <ToDoList :todo-data="todoData" />
      <ToDoFooter :todoDataInFooter="todoData" :selectAllInApp="selectAllTodo"
                  :delFinishedTodos = "delFinishedTodos">

        <input slot="isCheckAll" type="checkbox" v-model="isCheckAll"/>
        <span slot="finish">已完成{{finishedCount}}件/总计{{todoData.length}}件</span>
        <button slot="delete" class="btn-warning" @click="delFinishedTodos">清除已完成任务</button>
      </ToDoFooter>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from "./components/ToDoHeader";
  import ToDoList from "./components/ToDoList";
  import ToDoFooter from "./components/ToDoFooter";

  // 引入工具类
  import localStorageUtil from "./utils/localStorageUtil";
  import PubSub from 'pubsub-js';

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
    computed: {
      finishedCount() {
        return this.todoData.reduce(
                (total, todo) => total + (todo.finished ? 1 : 0), 0
        );
      },
      isCheckAll: {
        get() {
          // 注意这里直接写函数名 finishedCount，不用调用
          return this.finishedCount === this.todoData.length && this.todoData.length > 0;
        },
        // value 在复选框点击的时候，会自动传入
        set(value) {
          this.selectAllTodo(value);
        }
      }
    },
    mounted() {
      // 绑定自定义事件(addTodoInHeader) 监听
      this.$refs.header.$on('addTodoInHeader', this.addTodo);
      // 订阅消息
      // msg 指的是接收的消息名称， token 可以理解为接收的参数
      PubSub.subscribe('delItemInItem', (msg, token) =>{
        this.delTodo(token);
      });
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
