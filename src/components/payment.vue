<template>
	<div class="payment">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/payment_banner.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>兵者支付系统，定制更省心</h4>
		    				<div class="txt">
		    					分区数量无限制    用户数量无限制    支持多接口自主切换
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
        <div class="admin">
            <div class="w1400">
                <div class="test">
                    <div class="left">
                        <div class="midden">
                            <p>测试账号:admin</p>
                            <p>测试密码: admin888</p>
                        </div>
                    </div>
                    <a href="http://ww2.idc34.com" target="_blank" class="right">点击体验</a>
                </div>
            </div>
        </div>
    	<div class="box1">
    		<div class="w1400">
    			<div class="titles">
    				特权对比
    			</div>
    			<div class="list">
    				<ul>
    					<li>
    						<dl>
    							<dt>
    								<h6>兵者支付系统</h6>
    								<span class="disclaimer" @click="PopShow()">[责任声明]</span>
    							</dt>
    							<dd>
    								支付平台框架
    							</dd>
    							<dd>
    								多接口混合使用
    							</dd>
    							<dd>
    								多通道混合使用
    							</dd>
    							<dd>
    								分层式管理
    							</dd>
    							<dd>
    								负载架设服务
    							</dd>
    							<dd>
    								独立域名服务
    							</dd>
    							<dd>
    								数据分离架设
    							</dd>
    							<dd>
    								域名IP更换
    							</dd>
    							<dd>
    								多接口接入使用
    							</dd>
    							<dd>
    								更换域名IP等信息
    							</dd>
    						</dl>
    					</li>
    					<li class="hover">
    						<dl>
    							<dt>
    								<h6 class="color">定制版/<span>￥5800</span></h6>
    								<span class="link" @click="zixun()">立即购买</span>
    							</dt>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								定制接口
    							</dd>
    							<dd>
    								免费3次
    							</dd>
    						</dl>
    					</li>
    					<li class="hover">
    						<dl>
    							<dt>
    								<h6 class="color">商业版/<span>￥5800</span></h6>
    								<span class="link" @click="zixun()">立即购买</span>
    							</dt>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								终身免费
    							</dd>
    						</dl>
    					</li>
    					<li class="hover">
    						<dl>
    							<dt>
    								<h6>标准版/<span>￥2880</span></h6>
    								<span class="link" @click="zixun()">立即购买</span>
    							</dt>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								免费3次 (限终身版本）
    							</dd>
    						</dl>
    					</li>
    					<li class="hover">
    						<dl>
    							<dt>
    								<h6>个人版/<span>￥1000</span></h6>
    								<span class="link" @click="zixun()">立即购买</span>
    							</dt>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/x.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								<img src="../../static/img/gou.png" alt="">
    							</dd>
    							<dd>
    								免费3次 (限终身版本）
    							</dd>
    						</dl>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="pop_layer" v-show="isShow">
    		<div class="bg" @click="PopHide()"></div>
    		<div class="con">
    			<div class="tits">
    				免责声明
    			</div>
    			<div class="content">
    				<div class="scroll">
    					<p>
    						1. “兵者支付系统”由湖北兵者智能科技有限公司（以下简称“兵者智能”）研发，仅限于系统爱好者学习交流研究测试。
    					</p>
    					<p>
    						2. 在您使用“兵者支付系统”前，请您务必仔细阅读并透彻理解本声明。
    					</p>
    					<p>
    						3. 您可以选择不使用“兵者支付系统”，但如果您使用“兵者支付系统”，您的使用行为将被视为对本声明全部内容的认可。
    					</p>
    					<p>
    						4. 兵者智能尊重并保护所有使用“兵者支付系统”用户的个人隐私权，您注册的用户名、电子邮件地址等个人资料，非经您的亲自许可或根据相关法律、法规的强制性规定，兵者智能不会主动地泄露给第三方。
    					</p>
    					<p>
    						5. 兵者智能提醒您：您在使用“兵者支付系统”中填写的内容将不被认为是您的个人隐私资料。
    					</p>
    					<p>
    						6. 您应该对使用“兵者支付系统”的结果自行承担风险。
    					</p>
    					<p>
    						7. 兵者智能不做任何形式的保证：不保证使用结果满足您的要求，不保证使用服务不中断，不保证使用结果的安全性、正确性、及时性、合法性。
    					</p>
    					<p>
    						8. 因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用“兵者支付系统”，兵者智能不承担任何法律责任。
    					</p>
    					<p>
    						9. 您在使用“兵者支付系统”所从事的任何违法犯罪行为及针对第三方的侵权行为的法律后果均由其自己承担，兵者智能不承担任何民事、刑事责任。
    					</p>
    					<p style="text-align: right;">
    						湖北兵者智能科技有限公司--湖北山川律师事务所
    					</p>
    				</div>
    			</div>
    		</div>
    	</div>
	</div>
</template>

<script>
export default {
  	name: 'payment',
  	data () {
    	return {
    		bannerH:null,
    		Box3H:null,
    		isShow:true
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
    		this.bannerH = $(window).width()*0.2781;
    		this.Box3H = $('.box3 .left').height();
    	},
    	PopShow(){
    		this.isShow = !this.isShow
    	},
    	PopHide(){
    		this.isShow = false
    	},
        zixun(){
            this.$parent.talk(true);
        }
  	}
  	
}
</script>