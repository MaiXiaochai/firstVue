/*
* 异步更新state的方法
*/

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO} from './mutations-type'

export default {
    addTodo({commit}, todo) {
        // 正常版 commit('add_todo', {todoItem})
        commit(ADD_TODO, {todo});
    },
    delTodo({commit}, theIndex) {
        commit(DELETE_TODO, {theIndex});
    },
    selectAllTodo({commit}, isChecked) {
        commit(SELECT_ALL_TODO, {isChecked});
    },
    delFinishedTodos({commit}, todo) {
        commit(DELETE_FINISHED_TODO, {todo});
    },
}
