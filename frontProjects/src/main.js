import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vantConfig from "./vant.config";
import * as Types from "./store/mutation-type";

import VueAxios from "vue-axios"
import axios from "axios";


Vue.config.productionTip = false
    // use方法会自动调用，对象中的install函数并将自身作为参数传入
Vue.use(vantConfig);
Vue.use(VueAxios, axios);

// Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');



router.beforeEach((to, from, next) => {
    store.commit(Types.CHANGE_NAV_TITLE, { N: to.name, At: to.query.active })
    next();

})