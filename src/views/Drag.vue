<template>
    <div class="drag-wrapper">
        <p class="title">拖拽图片到选框</p>
        <ul>
            <li>
                <div id="box1" class="box" @drop="preview" @dragover="preventDefault"></div>
            </li>
            <li>
                <div id="box2" class="box" @drop="preview2" @dragover="preventDefault"></div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        methods:{
            preview(e){
                e.preventDefault();
                let box = e.target;
                let file = e.dataTransfer.files[0];
                let reader = new FileReader();
                reader.onload = function(e){
                    let img = document.createElement('img');
                    img.onload = function(){
                        box.appendChild(img);
                    }
                    img.src = e.target.result;
                }
                reader.readAsDataURL(file)
            },
            preview2(e){
                e.preventDefault();
                let url = URL.createObjectURL(e.dataTransfer.files[0])
                console.log(url)
                let img = document.createElement('img');
                img.onload = function(){
                    box2.appendChild(img);
                }
                img.src = url;
            },
            preventDefault(e){
                e.preventDefault();
            }
        }
    }
</script>
<style type="text/css">
    .drag-wrapper >.title{margin-bottom: 10px;}
    .drag-wrapper ul li{
        float: left;margin-right: 20px;
    }
    .box{
        width: 200px;height: 200px;border: 1px dashed #cccccc;
    }
    .box img{
        width: 198px;height: 198px;object-fit: contain;
    }
    .box + .tips{text-align: center;line-height: 24px;margin-top: 10px;}
</style>
