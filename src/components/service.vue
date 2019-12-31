<template>
	<div class="service">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/service_banner.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>单项服务</h4>
		    				<div class="txt">
		    					<p>
		    						分区数量无限制、用户数量无限制、支持多接口自主切换
		    					</p>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box1">
    		<div class="w1400">
    			<div class="padding">
	    			<div class="tits">
	    				<h6>定制服务</h6>
	    				<div class="cn">
	    					专业的定制服务，人性化的定制流程
	    				</div>
	    				<div class="en">
	    					Customized service
	    				</div>
	    			</div>
	    			<div class="pic">
	    				<div class="scroll">
	    					<img src="../../static/img/service_img2.png" alt="">
	    				</div>
	    			</div>
    			</div>
    		</div>
    	</div>
    	<div class="box2">
    		<div class="w1400">
    			<div class="box_top">
    				<ul>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							安装服务
	    						</div>
	    						<div class="text">
	    							专业定制安装，贴心服务
	    						</div>
	    						<div class="txt">
	    							100元/次
	    						</div>
    						</div>
    					</li>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							数据转移
	    						</div>
	    						<div class="text">
	    							无损、快速、便捷
	    						</div>
	    						<div class="txt">
	    							150元/次
	    						</div>
    						</div>
    					</li>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							程序迁移
	    						</div>
	    						<div class="text">
	    							程序快速迁移、安心、无忧
	    						</div>
	    						<div class="txt">
	    							150元/次
	    						</div>
    						</div>
    					</li>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							主页模板定制
	    						</div>
	    						<div class="text">
	    							高效率、专业化、合理布局
	    						</div>
	    						<div class="txt">
	    							200元/次
	    						</div>
    						</div>
    					</li>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							支付模板定制
	    						</div>
	    						<div class="text">
	    							安全、人性化、高效率
	    						</div>
	    						<div class="txt">
	    							400元/次
	    						</div>
    						</div>
    					</li>
    					<li>
    						<div class="padding">
	    						<div class="tit">
	    							底层环境安装
	    						</div>
	    						<div class="text">
	    							最大程度贴合
	    						</div>
	    						<div class="txt">
	    							100元/次
	    						</div>
    						</div>
    					</li>
    				</ul>
    			</div>
    			<div class="box_center">
    				<p>
    					注意事项
    				</p>
    				<p>
    					1.所有版本平台程序，不限制分区数量和不限制用户数量。
    				</p>
    				<p>
    					2.您可以通过购买相应的服务，也可以单独购买某项单项服务。
    				</p>
    				<p>
    					3.单项服务均不能退款。兵者智能享有对技术支持内容的最终解释权。
    				</p>
    			</div>
    			<div class="box_bot">
    				<p>
    					程序支持免费更换信息三次机会。机器ip及域名双重绑定，客户可以要求更换信息。机器ip或者域名可以根据需要更换3次。【注：IP和域名不能同时更换】(免费次数用完后，再需要更换，个人版本，收取服务费150元/次；标准版本，收取服务费100元/次，vip版本，不限次数，全免费)。客户可自行选择任何一家的服务器，如果租用我公司服务器，实行全免费服务。详情请咨询网站在线客服。
    				</p>
    			</div>
    		</div>
    	</div>
	</div>
</template>


<script>
export default {
  	name: 'service',
  	data () {
    	return {
    		bannerH:null,
    		Box2H:null,
    		isShow:false
    	}
  	},
  	mounted() {
  		var that = this;
  		this.GetHeight();
  		window.onresize = function(){ 
            that.GetHeight();
        };
  	},
  	methods: {
    	GetHeight(){
    		this.bannerH = $(window).width()*0.38125;
    		this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
    	},
    	PopShow(){
    		this.isShow = !this.isShow
    	},
    	PopHide(){
    		this.isShow = false
    	}
    	
  	}
  	
}
</script>