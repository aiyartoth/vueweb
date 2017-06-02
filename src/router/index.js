import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: (resolve)=>require(['@/components/index'], resolve)
        },
        {
            path: '/VuexRouter',
            component: (resolve)=>require(['@/components/VueRouter/index'], resolve),
            children: [
                {
                    path: "/",
                    alias:"list",
                    component: (resolve)=>require(['@/components/VueRouter/list'], resolve),
                    children: [{
                        path: "list-demo1",
                        component: (resolve)=>require(['@/components/VueRouter/list-demo1'], resolve),
                    },
                    {
                        path: "list-demo2",
                        component: (resolve)=>require(['@/components/VueRouter/list-demo2'], resolve),
                    }]
                },
                {
                    path: "user/:id",
                    component: (resolve)=>require(['@/components/VueRouter/user'], resolve),
                }]
        },
        /*{
         path:"/VuexRouter/user/:id",
         component:(resolve)=>require(['@/components/VueRouter/user'], resolve),
         },*/
        {
            path: '/Vuex',
            component: (resolve)=>require(['@/components/Vuex/Vuex'], resolve)
        },
        {
            path: '/Metro',
            component: (resolve)=>require(['@/components/Metro/index'], resolve)
        },
        {
            path: '/DataTrans',
            component: (resolve)=>require(['@/components/DataTrans/index'], resolve)
        },
        {
            path: '/RegExp',
            component: (resolve)=>require(['@/components/RegExp/index'], resolve)
        },
        {
            path: '*',
            component: (resolve)=>require(['@/components/index'], resolve)
        }
    ]
})
