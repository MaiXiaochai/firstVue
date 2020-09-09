// 引入
import Vue from 'vue';
import Router from 'vue-router';

// 一级界面
import Home from './views/Home';
import About from './views/About';
import Mine from './views/Mine';

// 二级界面
import News from "./views/News";
import Shop from "./views/Shop";

// 注册
Vue.use(Router);

let func = ({params, query}) => {
    return {
        name: params.name,
        gender: params.gender,
        height: query.height
    }
}

// 输出一个 Router实例给外界
export default new Router({
    // 在 routes 中配置所有的路由
    // routes 中一个对象就代表一条路由信息
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},  // 根路由指向 /home
        {path: '/about', name: 'about', component: About},
        {path: '/mine', name: 'mine', component: Mine},     // name 指的是该条路由的名称
        {
            path: '/home',
            name: 'home',
            component: Home,
            // 嵌套路由，内部 对象的 path不用加 '/'
            // 别忘记配置出口
            children: [
                {path: '/home', redirect: '/home/news'},
                {path: 'news', name: 'news', component: News},
                {path: 'Shop', name: 'shop', component: Shop},
            ]
        },
    ]
})
