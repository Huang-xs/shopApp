import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify'
import ShopCart from '../views/ShopCart'
import Mine from "../views/Mine"

Vue.use(VueRouter)

const routes = [
    // {
    //       path: '/classify',
    //       redirect: '/',
    //   },
    {
        path: '/',
        name: 'home',
        component: Home,

    },
    {
        path: "/classify",
        name: 'classify',
        component: Classify
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: ShopCart
    },
    {
        path: "/mine",
        name: 'mine',
        component: Mine
    }
    // 路由懒加载
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router