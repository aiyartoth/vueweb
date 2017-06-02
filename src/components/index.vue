<template>
    <div class="wrap">
        <h1 class="page-title">资料目录</h1>
        <h2>Vue</h2>
        <ul class="list-wrap">
            <li v-for="item in linkList" :style="'background:#'+item.color">
                <router-link :to="item.to" class="list-title">{{item.title}}</router-link>
            </li>
        </ul>
        <h2>其他资料</h2>
        <ul class="list-wrap">
            <li v-for="item in linkList2" :style="'background:#'+item.color">
                <router-link :to="item.to" class="list-title">{{item.title}}</router-link>
            </li>
        </ul>
        <button @click="outLink">百度</button>
        <router-view></router-view>
    </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../assets/css/common.styl"
    .wrap
        .list-wrap
            margin 0 auto
            width 900px
            font-size: 20px
            line-height: 1.5;
            list-style none
            overflow hidden
            li
                float left
                margin 5px
                width 150px
                height 150px
                text-align center
                font-size 20px
                line-height 150px
                background black
                &:hover
                    cursor pointer
                    //filter alpha(opacity=50)
                    opacity 0.5
                .list-title
                    display block
                    width 100%
                    height 100%
                    color white
                    text-decoration none
</style>
<script>
    export default {
        data() {
            return {
                linkList: [
                    {title: 'Vue-Router', to: '/VuexRouter', color: 'E51400'},
                    {title: 'Vuex', to: '/Vuex', color: '1BA1E2'},
                    {title: 'DataTrans', to: '/DataTrans', color: '339933'},
                ],
                linkList2: [
                    {title: 'metro颜色汇总', to: '/Metro', color: 'E51400'},
                    {title: '正则表达式', to: '/RegExp', color: 'E51400'},
                ],

            }
        },
        methods: {
            outLink(){
                window.open("http://www.baidu.com");
            }
        },
        components: {}
    }
</script>
