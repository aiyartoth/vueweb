<template>
    <div class="wrap">
        <h1>VuexRouter下的子路由</h1>
        <ol class="link-list">
            <li>
                <router-link to="/VuexRouter">/</router-link>
            </li>
            <li>
                <router-link to="/VuexRouter/user/1234">页面user 参数1234</router-link>
            </li>
            <li>
                <router-link to="/VuexRouter/user/abc">页面user 参数abc</router-link>
            </li>
        </ol>
        <h1>list下的子路由</h1>
        <ol>
            <li>
                <router-link to="/VuexRouter/list/list-demo1">list/list-demo1</router-link>
            </li>
            <li>
                <router-link to="/VuexRouter/list/list-demo2">list/list-demo2</router-link>
            </li>
        </ol>
        <transition name="slide-fade" enter-active-class="animated fadeIn animated-delay" leave-active-class="animated fadeOut">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style scoped rel="stylesheet/stylus" lang="stylus">
    @import "../../assets/css/common.styl"
    .animated
        animation-duration 1s
    .animated-delay
        animation-delay 1s
    .link-list
        font-size 16px
        line-height 1.5

    /*.slide-fade-enter-active {
        transition: all .3s ease 0.3s;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0) ;
    }

    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }*/
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
