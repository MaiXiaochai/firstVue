// 引入
import Vue from 'vue';
import Router from 'vue-router';

// 一级界面
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

// 二级界面
import Home from './views/Home';
import Mine from './views/Mine';
const About = () => import('./views/About');

// 注册
Vue.use(Router);


// 输出一个 Router实例给外界
const router = new Router({
    // 在 routes 中配置所有的路由
    // routes 中一个对象就代表一条路由信息
    mode: 'history',
    routes: [
        {path: '/', redirect: '/dashboard'},
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {path: '/dashboard', redirect: '/dashboard/home'},
                {path: 'home', name: 'home', component: Home},
                {path: 'about', name: 'about', component: About},
                {path: 'mine', name: 'mine', component: Mine}
            ],
        },
        {path: '/login', name: 'login', component: Login}
    ]
})

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    // 放行
    if (to.path !== '/login') {   // 不是访问登录页面
        if (window.isLogin) {    // 已经登录
            next();
        } else { // 没有登录
            next('/login');
        }
    } else { // 是去登录页面
        next();
    }

});

// 全局后置守卫
router.afterEach((to, from) => {
    // console.log('来了，老弟！');
});

export default router;

