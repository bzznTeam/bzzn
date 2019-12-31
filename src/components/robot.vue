<template>
  	<div class="robot">
    	<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/robot_banner.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>兵容天下 • 行者无疆</h4>
		    				<div class="en">
		    					<p>Open a new</p>
		    					<p>era of</p>
		    					<p>intelligence</p>
		    				</div>
		    				<div class="cn">
		    					———— &nbsp;&nbsp;&nbsp;综合智能机器人
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box1">
    		<div class="w1400">
    			<div class="tit">
    				综合智能服务型机器人
    			</div>
    			<div class="text">
    				<p>
    					人工智能一般是作为辅助人类工作的工具出现的，扫地机器人、医疗机器人、服务员机器人等是最常见的人工智能形态。。
    				</p>
    				<p>
    					事实上，人工智能并不只有机器人一种形态，从领域上来看，包括机器人、语言识别、图像识别、自然语言处理和专家系统等
    				</p>
    			</div>
    			<div class="pic">
    				<img src="../../static/img/robot_@banner.jpg" alt="">
    			</div>
    		</div>
    	</div>
    	<div class="box2">
    		<div class="w1400">
    			<div class="tit">
    				传感器扩展技术,让我们不断成长
    			</div>
    			<div class="text">
    				<p>
    					我们的能力不仅仅这些，敬请期待让我们绽放精彩···
    				</p>
    			</div>
    			<div class="con">
    				<ul>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon1.png" alt="">
    						</div>
    						<div class="txt">
    							红外探测
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon2.png" alt="">
    						</div>
    						<div class="txt">
    							陀螺仪
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon3.png" alt="">
    						</div>
    						<div class="txt">
    							温度感应
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon4.png" alt="">
    						</div>
    						<div class="txt">
    							色彩感应
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon5.png" alt="">
    						</div>
    						<div class="txt">
    							人脸识别
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon6.png" alt="">
    						</div>
    						<div class="txt">
    							视觉感应
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon7.png" alt="">
    						</div>
    						<div class="txt">
    							语音交互
    						</div>
    					</li>
    					<li>
    						<div class="icon">
    							<img src="../../static/img/robot_icon8.png" alt="">
    						</div>
    						<div class="txt">
    							更多精彩
    						</div>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="box3">
    		<div class="left">
    			<img src="../../static/img/robot_box3_img1.jpg" alt="">
    		</div>
    		<div class="right" :style="{height: Box3H+'px'}">
    			<div class="table-cell">
    				<div class="padding">
    					<div class="tit">
    						开启机器人智能服务新时代
    					</div>
    					<div class="line"></div>
    					<div class="text">
    						<p>
    							人工智能就其本质而言，是对人的思维的信息过程的模拟，
    						</p>
    						<p>
    							人工智能不是人的智能，但能像人那样思考、
    						</p>
    						<p>
    							也可能超过人的智能。
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box4">
    		<div class="pic">
    			<img src="../../static/img/robot_box4_img1.png" alt="">
    		</div>
    		<div class="w1400">
    			<div class="tit">
    				16个专业伺服舵机，实现更灵活的动作
    			</div>
    			<div class="text">
    				<p>
    					内含 16个自主研发的专业伺服舵机，内置MCU，包含伺服控制系统、传感反馈系统及直流驱动系统。
    				</p>
    				<p>
    					历经5年调校，将舵机间的时间差调校到0.01s，支持360°旋转运动，动作精度达1°，实现更多拟
    				</p>
    				<p>
    					人动作与功能场景，从此以后，你的机器人举手投足的每一个动作，都精妙绝伦。
    				</p>
    			</div>
    		</div>
    	</div>
    	<div class="box5">
    		<div class="w1400">
    			<p>
    				劳动力减少、系统性成本上升、服务业需求扩大，人口老龄化加剧，中国人力生态进入一个历史性的新常态。未来
    			</p>
    			<p>
    				企业和各种组织都面临着转变相应的用工方式，更新组织结构去适应变化。而兵者智能致力产品从基础到深入，去
    			</p>
    			<p>
    				挑战这一变化，兵者智能机器人正在招募软件工程师（人工智能方向）。未来已来，我们与您携手并进！
    			</p>
    		</div>
    		<canvas id="canvas" class="canvas"></canvas>
    	</div>
  	</div>
</template>

<script>
export default {
  	name: 'robot',
  	data () {
    	return {
    		bannerH:null,
    		Box3H:null
    	}
  	},
  	mounted() {
  		var that = this;
  		this.GetHeight();
  		this.BgCanvas();
  		window.onresize = function(){ 
            that.GetHeight();
        };
  	},
  	methods: {
    	GetHeight(){
    		this.bannerH = $(window).width()*0.4166;
    		this.Box3H = $(window).width()*0.478125;
    	},
    	BgCanvas(){
    		var text,x;
    		var Canvas = document.getElementById('canvas');
         	var width = $('#canvas').width();
            var height = $('#canvas').height();
            var yPositions = Array(300).join(0).split('');
            var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var color = ['#2be7f2',"#6be8ef"];
         	var ctx = Canvas.getContext('2d');
            var draw = function() {
            	// ctx.fillStyle = color[0]
	         	ctx.fillStyle = 'rgba(0,0,0,0.1)';
	         	ctx.fillRect(0, 0, width, height);
	         	// ctx.fillStyle = 'green';
	         	ctx.fillStyle = color[Math.floor(Math.random()*color.length)];
	         	ctx.font="6px Arial";
	         	yPositions.map(function(y, index) {
	             	text = String.fromCharCode(1e4 + Math.random() * 330);
	             	// text = arr[Math.floor(Math.random()*26)];

	             	x = (index * 6);
	             	Canvas.getContext('2d').fillText(text, x, y);
	             	if (y > Math.random() * 1e4) {
	                    yPositions[index] = 0;
	             	} else {
	                    yPositions[index] = y + 6;
	             	}
	            });
         	}
         	setInterval(draw,30);
    	}

  	}
  	
}
</script>

<style>
</style>
