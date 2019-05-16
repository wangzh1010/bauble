<template>
    <div v-show="show" class="modal">
        <div id="dialog" class="modal-dialog">
            <div class="modal-contetn">
                <div class="modal-header">
                    <slot name="title"></slot>
                    <a class="close" href="javascript:;" @click="hideModal">&times;</a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
      showModal(){
          this.show = true;
      },
      hideModal(){
          this.show = false;
      }
  }
};
</script>
<style type="text/css">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.modal-dialog {
  position: absolute;
  width: 400px;
  background-color: #ffffff;
  z-index: 1000;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  transform: translate(-50%,-50%);
}
.modal-header {
    padding: 15px 20px;
    height: 54px;
    line-height: 24px;
}
.modal-title{
    float: left;
    font-size: 14px;
    font-weight: bold;
}
.close {
  float: right;
  font-size: 16px;
}
.modal-body {
  padding: 15px 20px;
}
.ivu-input-wrapper{
    margin-bottom: 15px;
}
.modal-footer {
    padding: 15px 20px;
}
</style>
