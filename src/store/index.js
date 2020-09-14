/*
* file: index.js
* Vuex核心管理模块 - Store对象
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules
})
