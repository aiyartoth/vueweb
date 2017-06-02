<template>
    <div>
        <h1>数据传输测试</h1>
        <p>父组件的数据pData:</p>
        <p>{{pData}}</p>
        <p>{{pTestData}}</p>
        <button @click="onEmit()">on--emit</button>
        <button @click="addAge(1)">年龄+1</button>
        <hr class="box-wrap">
        <child1 class="box-wrap" :fromParentData="pData" @changeData="setData"></child1>
        <child2 :fromParentData="pData"></child2>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .box-wrap
        border-bottom 1px solid black
</style>
<script>
    import child1 from './child1.vue';
    import child2 from './child2.vue';
    export default{
        data(){
            return {
                msg: 'hello vue',
                pData: [
                    {name: "小明", age: 18},
                    {name: "小红", age: 17},
                    {name: "小绿", age: 19},
                ],
                pTestData: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            addAge(num){
                if (isNaN(num))  return false;
                /* this.pData.forEach(function (value,index) {
                 value.age+=1;
                 });*/
                this.pData.map(function (value, index) {
                    value.age += 1;
                });
                /*this.pTestData.forEach(function (value) {s
                 value+=1;
                 });*/
                this.pTestData.map(function (value) {
                    value += 1;
                    return value
                });
            },
            onEmit(){
                this.$on("selfEvent1", function (msg) {
                    alert("自定义事件: " + msg);
                });
                this.$emit("selfEvent1", "测试");
            },
            setData(num){
                this.pData.forEach(function (value) {
                    value.age += 1;
                });
            }
        },
        components: {
            child1, child2
        }
    }
</script>
