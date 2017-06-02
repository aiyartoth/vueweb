// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap'
import * as cFun from '@/assets/js/common'
import 'normalize.css'
import './assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    computed: {
        countParent(){
            return store.state.count;
        }
    },
    router,
    store,
    template: '<App/>',
    components: {App}
})
