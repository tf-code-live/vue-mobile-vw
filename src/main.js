import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'
import 'vant/lib/index.css'

import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')