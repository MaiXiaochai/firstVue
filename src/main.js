import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router';

Vue.config.productionTip = false

// 引入 vant 中的 Button
import { Button } from 'vant';
Vue.use(Button);

// 引入日期选择
import { DatetimePicker } from 'vant';

import './plugins/element.js'
Vue.use(DatetimePicker);

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
    // 这里一个 router <=> 'router': router
    router,
    render: h => h(App),
}).$mount('#app')
