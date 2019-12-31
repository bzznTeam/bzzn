<template>
	<div class="game_more">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/robot_banner_01.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>定制游戏</h4>
		    				<div class="txt">
		    					<p>
						          专注于游戏开发
						      </p>
        						<p>以工匠精神对每个细节 千锤百炼 精益求精</p>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box1 w1400">
			<div class="tit">
				更多游戏开发  MORE GAMES
			</div>
			<div class="more">
				<ul>
					<li>
						<img src="../../static/img/game_more_img1.jpg" alt="">
					</li>
					<li>
						<img src="../../static/img/game_more_img2.jpg" alt="">
					</li>
					<li>
						<img src="../../static/img/game_more_img3.jpg" alt="">
					</li>
					<li>
						<img src="../../static/img/game_more_img4.jpg" alt="">
					</li>
				</ul>
				<div class="txt">
					<p>
						欢迎需要定做游戏者提供更多游戏建议，我们将尽快提供游戏方案并运行！
					</p>
					<p>
						您的满意，是我们前进的动力 
					</p>
					<p>
						欢迎来电咨询。。。
					</p>
					<p>
						温馨提示：游戏开发请认准公司网站和客服QQ号码<a href="http://wpa.qq.com/msgrd?v=3&uin=5593664&site=qq&menu=yes"">5593664(兵者教官)</a>。
					</p>
					<p>
						温馨提示：全国业务咨询热线：0712-2598512
					</p>
					<p>
						温馨提示：商务专线：13635828588
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  	name: 'game_majiang',
  	data () {
    	return {
    		bannerH:null,
    		Box2H:null,
    		isShow:false,
            
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
    		this.bannerH = $(window).width()*0.40625;
    		// this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
    	}
  	}
}
</script>
<style>
	.game_more{
		background: #fafdff;
	}
</style>