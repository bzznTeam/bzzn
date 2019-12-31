<template>
  	<div class='zk-box'>
      	<div class='zk-flex zk-pd'>
        	<div class='zk-btn' @click='alerts'>提示框</div>
        	<Eject  type='alert' @took='okfall' :showstate='showa'>
          		<span slot='tlt'>提示</span>
          		<div slot='text'>这是一个提示弹窗</div>
        	</Eject>
      	</div>
      	<div class='zk-flex zk-pd'>
        	<div class='zk-btn zk-blue' @click='confirms'>对话框</div>
        		<Eject  type='confirm' @took='okfall2' @tocancel='cancelfall' :showstate='showc'>
          		<span slot='tlt'>确认</span>
          		<div slot='text'>{{msg}}</div>
        	</Eject>
      	</div>
    </div>
</template>
<script>
	export default{
	    name:'pop',
	    props:['type','showstate'],
	    methods:{
	      	tocancel:function(){
	        	this.$emit('tocancel');
	      	},
	      	took:function(){
	        	this.$emit('took');
	      	}
	    }
  	}
</script>

<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 10;
}
.modal-container {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.modal-header {
    height: 56px;
    background: #409EFF;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
}
.modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 57px;
    border-top: 1px solid #ddd;
}
.modal-footer button {
    width: 100px;
}
.modal-main {
    padding: 15px 40px;
}
</style>