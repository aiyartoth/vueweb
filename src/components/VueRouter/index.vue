<template>
    <div class="wrap">
        <h1 class="page-title" @click="changeShow(isShow)">This is Vue-Router learn page!</h1>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <n-end v-if="isShow"></n-end>
    </div>
</template>
<style scoped rel="stylesheet/stylus" lang="stylus">
    @import "../../assets/css/common.styl"
    .link-list
        font-size 16px
        line-height 1.5
</style>
<script>
    import nEnd from './end.vue'
    import * as cFun from '@/assets/js/common'
    export default{
        data(){
            return {
                isShow: false,
            }
        },
        methods: {
            changeShow(){
                this.isShow=cFun.changeBoolen(this.isShow);
            }
        },
        components: {
            nEnd
        }
    }
</script>
