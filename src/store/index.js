import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0  // 初始化数据
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DECREMENT(state) {
            state.count--;
        }
    },
    actions: {
        increment({commit}) {
            commit('INCREMENT');
        },
        decrement({commit}) {
            commit('DECREMENT');
        },
        incrementEven({commit, state}) {
            if(state.count % 2 === 0) {
                commit('INCREMENT');
            }
        },
        // 模拟异步，一秒后 +1
        incrementAsync({commit}) {
            setTimeout(() => {
                commit('INCREMENT');
            }, 1000)
        },
    },
    getters: {
        oddOrEven(state) {
            return state.count % 2 === 0 ? '偶数': '奇数';
        }
    },
    modules: {}
})
