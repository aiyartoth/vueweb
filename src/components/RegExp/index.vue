<template>
    <div id="wrap" class="wrap">
        <h1 class="animated slideInDown top-title">{{title}}</h1>
    </div>
</template>
<style scoped rel="stylesheet/stylus" lang="stylus">
    .top-title
        color black
</style>
<script type="text/javascript">
    export default{
        mounted: function () {
            setTimeout(function () {
                $(".top-title").removeClass("animated slideInDown");
            }, 5000);
        },
        data: function () {
            return {
                title: "正则表达式研究",
            }
        }
    }
</script>