<template>
    <div class="wrap">
        <div>this is template Child2!</div>
        <p>继承自父组件的数据</p>
        <p>{{fromParentData}}</p>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .wrap
        height 400px
        font-size 18px
        line-height 1.5
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props:["fromParentData"],
        components:{
        }
    }
</script>
