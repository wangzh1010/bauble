<template>
    <div v-show="notify" class="modal">
        <div id="dialog" class="modal-dialog">
            <div class="modal-header"><a href="javascript:;" class="close" @click="hideModal">&times;</a></div>
            <div class="modal-body">
                <ul>
                    <li v-for="(msg,index) in message" :key="index">{{msg}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {mapState, mapMutations} from 'vuex'
    import {HIDE_MODAL} from '../store/mutation-types'
    export default{
        props: {
            message: Array
        },
        mounted() {
            var winHeight = window.innerHeight;
            var modal = document.getElementById('dialog');
            var offsetTop = (winHeight - modal.offsetHeight) / 2
            modal.style.top = offsetTop + 'px';
        },
        methods: {
            ...mapMutations({
                hideModal: HIDE_MODAL
            })
        },
        computed: {
            ...mapState({
                notify: state => state.notify
            })
        }
    }
</script>
<style type="text/css">
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        z-index: 999;
    }
    .modal-dialog{
        position: absolute;
        width:400px;
        background-color: #ffffff;
        z-index: 1000;
        left: 50%;
        margin-left: -200px;
        border-radius: 5px;
    }
    .modal-header{
        height: 30px;
    }
    .close{
        float: right;
        margin-right: 5px;
        margin-top: 5px;
        font-size: 20px;
    }
    .modal-body{
        padding: 10px 15px;
    }
    .modal-body ul li{
        height: 24px;
        line-height: 24px;
    }
</style>
