<template>
    <div id="app">
        <div class="quick-list" v-if="isShow">
            <router-link to="/" title="返回首页" class="quick-icon">
                <span class="icon glyphicon glyphicon-home"></span>
            </router-link>
            <router-link to="/" title="百度" class="quick-icon">
                <span class="icon glyphicon glyphicon-search"></span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            isShow(){
                return this.$route.fullPath != "/"
            },
            count() {
                return this.$parent.countParent
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 10px;
        .quick-list
            position fixed
            z-index 9999
            right 20px
            bottom 20px
            .quick-icon
                display block
                margin-bottom 10px
                text-align center
                .icon
                    font-size 40px
                    line-height 1
                    color black
                    &:hover
                        color gray
</style>

