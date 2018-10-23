<template>
    <div class="zoom-container">
        <div class="wrapper" @mouseover="zoomIn">
            <img src="../assets/2.jpg" :width="width" :height="height">
            <div class="area" :style="areaStyles" v-if="show" @mouseover="stopBubble" @mouseout="zoomOut" @mousemove="move"></div>
        </div>
        <div v-if="show" class="zoom">
            <img src="../assets/2.jpg" :style="imgStyles" :width="width*scale" :height="height*scale">
        </div>
        </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            show: false,
            width: 480,
            height: 270,
            offsetX: 0,
            offsetY: 0,
            x: 0,
            y: 0,
            scale: 4,
            bw: 100,
            bh: 100,
            areaStyles: { left: '0px', top: '0px' },
            imgStyles: { marginLeft: '0px', marginTop: '0px' }
        }
    },
    mounted() {
        let wrapper = document.querySelector('.wrapper');
        this.offsetX = wrapper.offsetLeft;
        this.offsetY = wrapper.offsetTop;
    },
    methods: {
        zoomIn() {
            this.show = true;
            this.x = event.pageX;
            this.y = event.pageY;
            this.justify();
        },
        move() {
            this.x = event.pageX;
            this.y = event.pageY;
            this.justify();
            let disX = this.areaStyles.left.match(/\d+/)[0];
            this.imgStyles.marginLeft = -disX * this.scale + 'px';
            let disY = this.areaStyles.top.match(/\d+/)[0];
            this.imgStyles.marginTop = -disY * this.scale + 'px';
        },
        zoomOut() {
            this.show = false;
        },
        stopBubble() {
            event.stopPropagation();
        },
        justify() {
            let deltaX = this.x - this.offsetX;
            if (deltaX < this.bw / 2) {
                this.areaStyles.left = '0px';
            } else if (deltaX + this.bw / 2 >= this.width) {
                this.areaStyles.left = (this.width - this.bw) + 'px';
            } else {
                this.areaStyles.left = (deltaX - this.bw / 2) + 'px';
            }
            let deltaY = this.y - this.offsetY;
            if (deltaY < this.bh / 2) {
                this.areaStyles.top = '0px';
            } else if (deltaY + this.bh / 2 >= this.height) {
                this.areaStyles.top = (this.height - this.bh) + 'px';
            } else {
                this.areaStyles.top = (deltaY - this.bh / 2) + 'px';
            }
        }
    }
}

</script>
<style type="text/css">
.zoom-container {
    display: flex;
    justify-content: flex-start;
    height: 600px;
}

.wrapper {
    position: relative;
    width: 480px;
    height: 270px;
}

.wrapper .area {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.3);
}

.wrapper+.zoom {
    width: 400px;
    height: 400px;
    border: 1px solid #696969;
    background-color: #fff;
    margin-left: 20px;
    overflow: hidden;
}

</style>
