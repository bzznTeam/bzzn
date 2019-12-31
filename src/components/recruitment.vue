<template>
	<div class="recruitment">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/recruitment_banner.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>遇见你，遇见未来</h4>
		    				<div class="txt">
		    					<p>
		    						摒弃迂腐的形式主义，以创业的心态工作。
		    					</p>
		    					<p>
		    						充满激情，努力奋斗，做最有价值的事情。
		    					</p>
		    					<p>
		    						能者居之，成就理想，做互联网业内最出色的网络精英。
		    					</p>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box1">
    		<div class="w1400">
    			<div class="top">
    				<ul>
    					<li>
    						<div class="padding">
    							职位名称
    						</div>
    					</li>
    					<li>
    						<div class="padding">
    							职位类别
    						</div>
    					</li>
    					<li>
    						<div class="padding">
    							工作地点
    						</div>
    					</li>
    					<li>
    						<div class="padding">
    							招聘人数
    						</div>
    					</li>
    					<li>
    						<div class="padding">
    							更新时间
    						</div>
    					</li>
    					<li>
    						<div class="padding">
    							&nbsp;
    						</div>
    					</li>
    				</ul>
    			</div>
    			<div class="bot">
    				<ul>
    					<template v-for="(item,index) in list">
	    					<li>
	    						<dl @click="ShowToggle($event)">
	    							<dd>{{item.employName}}</dd>
	    							<dd>{{item.employType}}</dd>
	    							<dd>{{item.employAddress}}</dd>
	    							<dd>{{item.employNumber}}</dd>
	    							<dd>{{item.employUpdateTime}}</dd>
	    							<dd>
	    								<img src="../../static/img/jt1.png" alt="">
	    							</dd>
	    						</dl>
	    						<div class="text" v-show="isShow">
                                    <p>
                                        <strong v-if="item.employDuty == ''||item.employDuty == null ? false:true">岗位职责</strong>
                                        <div v-html="item.employDuty"></div>
                                    </p>
                                    <p>
                                        <strong v-if="item.employRequire == ''||item.employRequire == null ? false:true">职位要求</strong>
                                        <div v-html="item.employRequire"></div>
                                    </p>
	    						</div>
	    					</li>
    					</template>
    				</ul>
    			</div>
    		</div>
    	</div>
	</div>
</template>

<script>
	export default{
		name:'recruitment',
		data () {
			return {
				bannerH:null,
    			Box2H:null,
    			isShow:false,
    			list:[
    				
    			]
			}
		},
		mounted() {
	  		var that = this;
	  		this.GetHeight();
	  		window.onresize = function(){ 
	            that.GetHeight();
	        };

            this.axios.get('/main/recruit').then(response => {
                if (response.status === 200) {
                    this.list = response.data.data
                    // this.list = response.data
                }
              
            }).catch(function (error) { // 请求失败处理
                console.log(error)
            })
	  	},
	  	methods: {
	    	GetHeight(){
	    		this.bannerH = $(window).width()*0.4609;
	    		this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
	    	},
	    	ShowToggle(e){
	    		var that = $(e.currentTarget);
	    		if (that.parent().hasClass('on')) {
	    			that.parent().removeClass('on');
	    			that.siblings().stop(true,false).slideUp()
	    		}else{
	    			that.parent().addClass('on')
	    			that.siblings().stop(true,false).slideDown();
	    			that.parent().siblings().children('.text').slideUp();
	    			that.parent().siblings().removeClass('on')
	    		}
	    	}
	    	
  		}
	}
</script>