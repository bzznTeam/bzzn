<template>
	<div class="channels">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/channels_banner.jpg" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>沟通无线    ·    联通未来</h4>
		    				<div class="txt">
		    					<p>
		    						建立稳定持续的伙伴关系,满足日益增长的市场需求
		    					</p>
		    					<p>
		    						促进电子商务市场健康发展
		    					</p>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="box1">
    		<div class="w1400">
    			<div class="tits">
    				接口通道使用说明
    			</div>
    			<div class="text">
    				<p>
    					目前接口市场比较混乱，无牌、无照、淘宝、代办等等。花样百出，也给一些投机取巧之人塑造了良机。为此,我司制定接口业务指定接入方案：我司的程序是先获取接口id，后架设程序。所以在申请接口时请提醒是"兵者" 的客户。请您在指定的网站联系指定的业务申请id。 其他途径申请的id我司视为一律无效不予接入。这样的好处是：
    				</p>
    				<p>
    					1、有效避免商户群体被骗。造成不必要的损失和误会。
    				</p>
    				<p>
    					2、更方便接口之间的交流与售后处理。
    				</p>
    				<p>
    					3、避免接口业务之间争抢客户的现象。为我司售后造成不必要的麻烦
    				</p>
    			</div>
    		</div>
    	</div>
    	<div class="box2">
    		<div class="w1400">
    			<ul>
    				<li v-for="(item,index) in Box2Lists">
    					<div class="padding">
	    					<div class="pic">
	    						<img :src="item.src" alt="">
	    					</div>
	    					<div class="text" :style="{height:Box2H+'px'}">
	    						{{item.content}}
	    					</div>
                            <span class="link" @click="modelShow(index)">了解更多>></span>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>


        <div class="model" v-if="show">
            <div class="bg" @click="close()"></div>
            <div class="con" v-for="(item,index) in lists" v-if="index == curretView">
                <div class="tit">
                    {{item.tit}}
                </div>
                <div class="text" v-html="item.content">
                    
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  	name: 'channels',
  	data () {
    	return {
    		bannerH:null,
    		Box2H:null,
    		isShow:false,
            curretView:0,
            show:false,
            Box2Lists:[
                {
                    src:'../../static/img/channels_icon1.png',
                    content:'支付云（zhifuyun.com）是一家企业内部的虚拟支付团队，帮助企业快速高效的搭建自己的支付系统。无论企业是否已经对接支付渠道，都可以使用支付云的产品和服务。作为支付技术服务商，支付云提供标准化支付产品及全面的支付渠道，并坚持阳光支付，只负责信息处理，不参与资金清算，是企业坚实的商业合作伙伴'
                },
                {
                    src:'../../static/img/channels_icon2.png',
                    content:'“优易网络”作为国内先进的点卡消耗平台，公司拥有多名软件开发工程师，是充满着激情和创意思维且拥有多年的互联网从业经验的团队。通过自身技术与服务的集成，为商户提供一站式充值卡解决方案，从而给消费者提供更加便利、快捷的体验。'
                },
                {
                    src:'../../static/img/channels_icon3.png',
                    content:'70卡世界作为国内领先的充值卡收购平台，官方网址：www.yzch.net。70卡拥有巨大的经销商资源；同时拥有成熟的API接口技术(全自动化、人性化)，愿与国内各大网页游戏研发公司、游戏运营商等网商合作，目前支持14种充值卡海量回收，接口稳定、流畅，使您的利益最大化，共创双赢局面！'
                },
                {
                    src:'../../static/img/channels_icon4.png',
                    content:'“优卡联盟”是国内领先的游戏点卡消耗平台，官方网址：www.7uka.com。优卡联盟由济宁畅游网络科技有限公司于2013年10月创立至今，本着互惠互利，合作共赢的原则，为国内众多的游戏运营商及电子商务运营商延伸出多种安全、便捷、稳定的充值卡在线收费方式'
                }
            ],
            lists:[
                {
                    tit:'支付云',
                    content:'<p>合作商户：<a target="_blank" href="http://jiuka.com">http://jiuka.com</a>/支付云</p><p> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=2355267954&site=qq&menu=yes" target="_blank">2355267954</a>（铃铛-支付云） <a href="http://wpa.qq.com/msgrd?v=3&uin=2355267972&site=qq&menu=yes" target="_blank">2355267972</a>（支付云佳琪） <a href="http://wpa.qq.com/msgrd?v=3&uin=2355267957&site=qq&menu=yes" target="_blank">2355267957</a>（支付云小胡查单）</p><p> 业务电话:13365663660</p> <p>                        支持通道：网银、支付宝扫码、微信扫码、qq钱包</p><p>                        申请时间：所需时间1小时之内，电签合同回传电子版，由工作人员审核开通。</p> <p>                        结算方式：公司T+1自动出款，周末节假日正常结算。</p> <p>申请方式：联系官网客服签约</p>'
                },
                {
                    tit:'优易网络',
                    content:'<p>合作商户：<a href="user.5186fu.com" target="_blank">user.5186fu.com</a>（优易网络）</p><p> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=46277447&site=qq&menu=yes" target="_blank">46277447</a>(优易网络-小易) <a href="http://wpa.qq.com/msgrd?v=3&uin=1722233000&site=qq&menu=yes" target="_blank">1722233000</a>（优易网络-小优） <a href="http://wpa.qq.com/msgrd?v=3&uin=1722266000&site=qq&menu=yes" target="_blank">1722266000</a>（优易网络-小洛）</p><p>支持通道：网银、支付宝扫码、微信扫码、花呗、点卡</p> <p>                        申请时间：所需时间1小时之内，电签合同回传电子版，由工作人员审核开通。</p> <p>                        结算方式：公司T+1自动出款，周末节假日正常结算。</p> <p>申请方式：联系官网客服签约</p>'
                },
                {
                    tit:'70卡世界',
                    content:'<p>合作商户：<a href="www.yzch.net" target="_blank">www.yzch.net</a>（70卡世界）</p><p> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=3002702577&site=qq&menu=yes" target="_blank">3002702577</a>(70卡世界-张) <a href="http://wpa.qq.com/msgrd?v=3&uin=3002706492&site=qq&menu=yes" target="_blank">3002706492</a>(70卡世界-崔)</p><p> 业务电话:18105276698 18105276702</p> <p>支持通道：点卡、支付宝扫码、微信扫码、网银</p><p>                        申请时间：所需时间大约1-2小时，向工作人员索取邀请码</p> <p>                        结算方式：不扣押金，自动出款。</p><p>申请方式：网站域名及备案号，身份证复印件1份，自助注册使用，之后一周内补上合同（纸质、扫描件）。</p>'
                },
                {
                    tit:'优卡联盟',
                    content:'<p>合作商户：<a href="www.7uka.com" target="_blank">www.7uka.com</a>(优卡联盟)</p><p> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=3004508335&site=qq&menu=yes" target="_blank">3004508335</a>(优卡网络-右手) <a href="http://wpa.qq.com/msgrd?v=3&uin=3004561227&site=qq&menu=yes" target="_blank">3004561227</a>(优卡商务)</p><p> 业务电话:400-877-9057 13375471786</p> <p>支持通道：网银，支付宝，财付通，微信，扫码，点卡</p><p>                        申请时间：大约1-2小时，不需要邮寄合同。</p> <p>                        结算方式：公司（T+0），个人（T+0）均可实时到账。</p><p>网站域名，备案号，QQ，联系电话及银行卡号。</p>'
                }
            ]
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
    		this.bannerH = $(window).width()*0.4583;
    		this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
    	},
        modelShow(index){
            console.log(index);
            this.curretView = index;
            this.show = true;
        },
        close(){
           this.show = false;
        }
  	}
  	
}
</script>