/*
* 状态对象模块
*/

import localStorageUtil from "../utils/localStorageUtil";

export default {
    todoData: localStorageUtil.readTodos()
}
