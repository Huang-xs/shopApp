import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headerTitle: "首页",
        routeContent: {
            home: "首页",
            classify: "分类",
            shopcart: "购物车",
            mine: "个人中心"
        },
        productList: [], //商品列表
        active: 0, //激活的导航下标
        info: 0, //加入购物车的商品数量
        shopcartPro: [],
        allPrice: 0,
        isDegital: false,
        degitalData: {},
        waitPay: [],
        alreadyPayPro: []
    },
    mutations,
    actions: {},
    modules: {}
})