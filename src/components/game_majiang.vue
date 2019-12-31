<template>
	<div class="game_majiang">
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
				麻将游戏开发  MAHJONG GAME
			</div>
			<div class="list">
				<ul>
                    <li>
                        晋中麻将
                    </li>
                    <li>
                        运城麻将
                    </li>
                    <li>
                        韶关麻将
                    </li>
                    <li>
                        龙岩麻将
                    </li>
                    <li>
                        奉新麻将
                    </li>
                    <li>
                        宜昌麻将
                    </li>
                    <li>
                        福州麻将
                    </li>
                    <li>
                        河源麻将
                    </li>
                    <li>
                        营口麻将
                    </li>
                    <li>
                        河南麻将
                    </li>
                    <li>
                        四川麻将
                    </li>
                    <li>
                        河源麻将
                    </li>
                    <li>
                        赣州冲关
                    </li>
                    <li>
                        广东麻将
                    </li>
                    <li>
                        集贤麻将
                    </li>
                    <li>
                        榆林麻将
                    </li>
                    <li>
                        西安麻将
                    </li>
                    <li>
                        宝鸡麻将
                    </li>
                    <li>
                        大庆麻将
                    </li>
                    <li>
                        武汉晃晃
                    </li>
                    <li>
                        九江麻将
                    </li>
                    <li>
                        南昌麻将
                    </li>
                    <li>
                        安庆麻将
                    </li>
                    <li>
                        望奎麻将
                    </li>
                    <li>
                        辽阳麻将
                    </li>
                    <li>
                        温州麻将
                    </li>
                    <li>
                        卡五星
                    </li>
                    <li>
                        碰胡子
                    </li>
                    <li>
                        跑胡子
                    </li>
                    <li>
                        转转麻将
                    </li>
                    <li>
                        血战到底
                    </li>
                    <li>
                        柳州麻将
                    </li>
                    <li>
                        仙桃晃晃
                    </li>
                    <li>
                        抓鸡麻将
                    </li>
                    <li>
                        红中麻将
                    </li>
                </ul>
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