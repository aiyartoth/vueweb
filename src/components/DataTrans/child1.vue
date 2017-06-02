<template>
    <div class="wrap">
        <div>this is template Child1!</div>
        <p>继承自父组件的数据</p>
        <p>{{fromParentData}}</p>
        <button @click="changeData">年龄加1</button>
        <button @click="changeData2">直接修改数据</button>

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
            return {
                msg: 'hello vue',
                jqueryVersions: null,
                dataList: [1, 2, 3, 4, 5]
            }
        },
        props:["fromParentData"],
        methods: {
            changeData(){
                this.$emit("changeData",1);
            },
            changeData2(){
                this.fromParentData.forEach(function (value) {
                    value.age+=1;
                });
            }
        },
        filters: {

        },
        components: {}
    }
</script>
