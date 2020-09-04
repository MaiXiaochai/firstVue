import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'

Vue.config.productionTip = false
/*
  注册全局指令, 定义一个转大写的指令
  Vue.directive
*/

Vue.directive('upper-word', (el, binding) => {
    console.log(el, binding);
    el.textContent = binding.value.toUpperCase();
});

// 注册全局过滤器
Vue.filter('globalCurrencyFormat', (value) => {
    return '￥' + Number(value).toFixed(3)
})


new Vue({
    render: h => h(App),
}).$mount('#app')
