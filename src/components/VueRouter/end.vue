<template>
    <div>
        <p class="t1">路由总结:</p>
        <p class="t">1.router-view的渲染结合router表中定义的结构,子路由渲染在父路由的routerView上面 <br>
            <span class="nt">在当前项目中,最根的vue为App.vue,其页面有一个routerView,用于渲染路由结构中最外层的路由,也就是/xxx</span>
            <span class="nt">而/xxx下的子路由则渲染在/xxx上的router-view上面</span>
        </p>
    </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/css/end.styl"
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
