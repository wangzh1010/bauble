<template>
    <div class="flop-container">
        <p class="title">Flop</p>
        <div class="flop-wrapper">
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/1.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/2.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/3.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/4.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/5.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/6.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/7.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
            <div :class="{'flip':flip}" class="card">
                <div class="front"><img src="../assets/8.png"></div>
                <div class="back"><img src="../assets/9.png"></div>
            </div>
        </div>
        <Button @click="run">Click</Button>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            flip: false
        }
    },
    methods: {
        run() {
            if(!this.flip){
                this.flip = true;
            }else{
                this.flip = false;
            }
        }
    }
}

</script>
<style scoped lang="less">
.title {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
}

.flop-wrapper {
    width: 680px;
    display: flex;
    flex-wrap:wrap;
    margin: 0px auto;
    .card {
        position: relative;
        margin: 0px 20px 20px 0px;
        transition: all 1.8s;
        transform-style: preserve-3d;
        // transform-origin: left center;
        // transform: perspective(1000px);
    }

    .front {
        position: relative;
        transform: translateZ(1px);
    }

    .back {
        position: absolute;
        transform: scale(-1, 1);
        top: 0;
        left: 0;
    }

    img {
        width: 150px;
    }
}

.flip {
    transform: rotateY(-180deg);
}

</style>
