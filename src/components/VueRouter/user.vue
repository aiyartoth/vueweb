<template>
    <div class="wrap">
        <h1 class="page-title">This is User  page!</h1>
        <p>测试页面,用户组件</p>
        <p>{{$route.params}}</p>
        <p>{{$route.query}}</p>
        <p>{{$route.fullPath}}</p>
    </div>
</template>
<style scoped rel="stylesheet/stylus" lang="stylus">
    @import "../../assets/css/common.styl"
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        created(){
            console.log(this);
            console.log(this.$route);
            console.log(this.$router);
        },
        components:{
        }
    }
</script>
