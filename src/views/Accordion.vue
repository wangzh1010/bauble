<template>
    <div class="accordion-container">
        <ul>
            <li :class="{'expand':item.expand}" v-for="(item,index) in list" :key="index">
                <p class="title" @click="expand($event,index)">{{item.title}}{{index + 1}}</p>
                <div class="content">
                    <div v-html="item.content"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                list:[
                    {expand:false,title:'标题',content:'置身人群中<br/>你只需要被淹没 享受 沉默<br/>退到人群后<br/>你只需给予双手 微笑 等候'},
                    {expand:false,title:'标题',content:'走在忠孝东路<br>徘徊在茫然中<br>在我的人生旅途<br>选择了多少错误<br>我在睡梦中惊醒<br>感叹悔言无尽<br>恨我不能说服自己<br>接受一切教训<br>让生命去等候<br>等候下一个漂流<br>让生命去等候<br>等候下一个伤口'},
                    {expand:false,title:'标题',content:'我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？'}]
            }
        },
        methods:{
            expand(e,index){
                this.list[index].expand = !this.list[index].expand;
                let elem = e.target;
                let nextElem = elem.nextElementSibling;
                if(this.list[index].expand){
                    let h = nextElem.children[0].offsetHeight;
                    nextElem.style.height = h + 'px';
                }else{
                    nextElem.style.height = '0px';
                }
            }
        }
    }
</script>
<style scoped type="text/css">
.accordion-container {
    width: 200px;
    margin: 50px 100px;
    border: 1px solid #e6e6e6;
}

.accordion-container .content {
    height: 0px;
    overflow: hidden;
    transition: height 0.5s;
    -webkit-transition: height 0.5s;
}

.accordion-container .content>div {
    padding: 6px 12px;
}

.accordion-container .title {
    padding: 0px 12px;
    height: 30px;
    line-height: 30px;
    position: relative;
    cursor: pointer;
}

.accordion-container li {
    border-bottom: 1px solid #e6e6e6;
}

.accordion-container li:last-child {
    border-bottom-width: 0px;
}

.accordion-container .title::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 6px;
    width: 0px;
    height: 0px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #3c3c3c;
    transition: transform 0.3s;
    -webkit-transition: transform 0.3s;
}

.accordion-container .expand .title {
    background-color: #e6e6e6;
}

.accordion-container .expand .title:after{
    transform: rotate(90deg)
}

/*.accordion-box .expand .content{
    height: 100px;
}*/

</style>
