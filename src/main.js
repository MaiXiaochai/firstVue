import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*
  注册全局指令, 定义一个转大写的指令
  Vue.directive
*/

Vue.directive('upper-word', (el, binding) => {
    console.log(el, binding);
    el.textContent = binding.value.toUpperCase();
});

new Vue({
    render: h => h(App),
}).$mount('#app')
