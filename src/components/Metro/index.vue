<template>
    <div class="wrap">
        <h1 class="page-title">Metro 颜色汇总</h1>
        <ul class="color-list">
            <template v-if="colorList">
                <li v-for="item in colorList" >
                    <p class="color-name">{{item.name}}：
                        <span :style="'color: #'+item.color">{{item.color}}</span></p>
                    <div class="color-demo" :style="'background: #'+item.color" @click="copyColorValue(item.color)"></div>
                </li>
            </template>
        </ul>
        <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/css/common.styl"
    .color-list
        list-style none
        li
            margin-bottom 10px
            overflow hidden
            .color-name
                float left
                margin 0
                width 140px
                font-size 18px
                line-height 30px
            .color-demo
                float left
                margin-left 20px
                width 100px
                height 30px
</style>
<script type="text/javascript">
    export default{
        data(){
            return {
                colorList: [
                    {name: '红色', color: "E51400"},
                    {name: '蓝色', color: "1BA1E2"},
                    {name: '绿色', color: "339933"},
                    {name: '草绿', color: "8CBF26"},
                    {name: '橙色', color: "F09609"},
                    {name: '湖蓝', color: "00ABA9"},
                    {name: '洋红', color: "FF0097"},
                    {name: '粉色', color: "E671B8"},
                    {name: '棕色', color: "996600"},
                    {name: '紫色', color: "A200FF"},
                    {name: '灰色', color: "DEDFDE"},
                ]
            }
        },
        components: {},
        methods:{
            copyColorValue:function (val) {
                if(window.clipboardData){
                    window.clipboardData.clearData();
                    window.clipboardData.setData("Text","#"+val);
                    alert("颜色值已经复制到粘贴板!");
                }else{
                    alert("该浏览器暂不支持点击复制到粘贴板操作!")
                }
            }
        }
    }
</script>
