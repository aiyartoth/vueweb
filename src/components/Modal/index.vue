<template>
    <div class="wrap">
        <div class="container">
            <h2>使用Bootstrap创建模态框</h2>
            <!--<div id="example" class="modal hide fade in" style="display: none; ">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal">×</a>
                    <h3>这是一个模态框标题</h3>
                </div>
                <div class="modal-body">
                    <h4>模态框中的文本</h4>
                    <p>你可以在这添加一些文本。</p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-success">唤醒活动</a>
                    <a href="#" class="btn" data-dismiss="modal">关闭</a>
                </div>
            </div>
            <p><a data-toggle="modal" href="#example" class="btn btn-primary btn-large">发动演示模态框</a></p>-->
            <!--<div id="example" class="modal hide fade in" style="display: none; ">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal">×</a>
                    <h3>This is a Modal Heading</h3>
                </div>
                <div class="modal-body">
                    <h4>Text in a modal</h4>
                    <p>You can add some text here.</p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-success">Call to action</a>
                    <a href="#" class="btn" data-dismiss="modal">Close</a>
                </div>
            </div>
            <p><a data-toggle="modal" href="#example" class="btn btn-primary btn-large">Launch demo modal</a></p>-->
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted(){
        },
        data(){
            return {

            }
        }
    }
</script>