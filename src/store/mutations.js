/*
* 同步更新状态的方法
*/

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO} from './mutations-type'

export default {
    // [ADD_TODO] 表示使用常量 ADD_TODO的值
    [ADD_TODO](state, {todo}) {
        state.todoData.unshift(todo);
    },
    [DELETE_TODO](state, {theIndex}) {
        state.todoData.splice(theIndex, 1);
    },
    [SELECT_ALL_TODO](state, {isChecked}) {
        state.todoData.forEach(todo => {
            todo.finished = isChecked;
        });
    },
    [DELETE_FINISHED_TODO](state) {
        state.todoData = state.todoData.filter(todo => !todo.finished);
    },
}
