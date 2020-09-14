/*
* 服务于state
*/

export default {
    // 任务总数
    todosCount(state) {
        return state.todoData.length;
    },

    // 已经完成的任务数量
    finishedCount(state) {
        return state.todoData.reduce(
            (total, todo) => total + (todo.finished ? 1 : 0), 0
        );
    },

    // 判断是否是全选
    isCheckAll(state, getters) {
        // 注意这里直接写函数名 finishedCount，不用调用
        return getters.finishedCount === getters.todosCount && getters.todosCount > 0;
    },
}
