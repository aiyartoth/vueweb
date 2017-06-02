/**
 * Created by Aiyartoth on 2017/4/10 0010.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import basic from './basic/index'
import child from './child/index'
Vue.use(Vuex);

export default new Vuex.Store({
    // ...basic
    state: {
        rootCount: 10000,
    },
    mutations: {
        rootFun(state){
            state.rootCount += 10000;
        }
    },
    modules: {basic, child}
})