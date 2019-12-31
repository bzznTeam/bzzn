<template>
	<div class="warpper paySys">
		<div class="banner" :style="{height: bannerH+'px'}">
    		<div class="pic">
    			<img src="../../static/img/images/leasing_banner_02.png" alt="">
    		</div>
    		<div class="text">
    			<div class="table-cell">
    				<div class="w1400">
    					<div class="padding">
		    				<h4>兵者防火墙</h4>
		    				<div class="txt">
			    				<p>
			    					以开放和融和的态度与众多国内外知名IT厂商兼容并蓄
			    				</p>
			    				<p>
			    					不断向互联网应用领域纵深化发展。
			    				</p>
			    			</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="tabs">
    		<div class="w1180">
    			<ul>
    				<li v-for="(item,index) in Tabs" @click="tabsClick(index)" :class="isActive == index ? 'active':''">
						{{item.tit}}
					</li>
				</ul>
				<div class="goumai">
				    <p>
				    	<span>关注</span>
				        <a href="https://shop137542921.taobao.com/index.htm?spm=2013.1.w5002-12561809251.2.KnorzC&qq-pf-to=pcqq.c2c"
				           target="_blank">
				            兵者官方淘宝店</a>，有优惠活动哦！
				    </p>
				    <p>
				        <a class="buy" id="buy" href="javascript:;" >立即购买</a>（附带激活码）
				    </p>
				</div>
    		</div>
    	</div>
    	<div class="content">
    		<div class="w1180">
    			<div class="padding">
    				<!-- 兵者防火墙 -->
    				<div class="box1" style="display: block;">
    					<div class="txt">
							<ul>
								<li>
									<div class="icon">
										<img src="../../static/img/5.png" alt="">
									</div>
									<div class="text">
										硬件级防御，能够高效的处理数据包的过滤
									</div>

								</li>
								<li>
									<div class="icon">
										<img src="../../static/img/8.png" alt="">
									</div>
									<div class="text">
										网站、游戏服务器防护，能有效识别阻止各种入侵
									</div>
								</li>
								<li>
									<div class="icon">
										<img src="../../static/img/4.png" alt="">
									</div>
									<div class="text">
										专业防范syn cc ddos等常见的网络攻击行为
									</div>
								</li>
								<li>
									<div class="icon">
										<img src="../../static/img/15.png" alt="">
									</div>
									<div class="text">
										采用服务端和操作端分离构架，远程监控
									</div>
								</li>
							</ul>
							<div class="txt_mark">
								<ul>
									<li>
										<p>
											1.能有效的防止各种类型CC攻击。
										</p>
										<p>
											2.实时系统监控，能观察系统的运行状态及网络连接状况。
										</p>
										<p>
											3.专业防范ASP、PHP、PERL、JSP等脚本程序的洪水式Flood调用导致数据库和WEB崩溃的拒绝服务攻击。
										</p>
										<p>
											4.其功能方便快捷，运行稳定。
										</p>
										<p>
											5.可通过IP和MAC的静态绑定，以最安全的方式和最好的性能实现ARP欺骗防护。
										</p>
										<p>
											6.智能检测Port扫描、SQL注入、密码猜测、Expolit利用等2000多种黑客入侵行为并阻断。
										</p>
										<p>
											&lt;!-再次点击以关闭-!&gt;
										</p>
									</li>
									<li>
										<p>
											1.能有效的防止各种类型CC攻击。
										</p>
										<p>
											2.实时系统监控，能观察系统的运行状态及网络连接状况。
										</p>
										<p>
											3.专业防范ASP、PHP、PERL、JSP等脚本程序的洪水式Flood调用导致数据库和WEB崩溃的拒绝服务攻击。
										</p>
										<p>
											4.其功能方便快捷，运行稳定。
										</p>
										<p>
											5.可通过IP和MAC的静态绑定，以最安全的方式和最好的性能实现ARP欺骗防护。
										</p>
										<p>
											6.智能检测Port扫描、SQL注入、密码猜测、Expolit利用等2000多种黑客入侵行为并阻断。
										</p>
										<p>
											&lt;!-再次点击以关闭-!&gt;
										</p>
									</li>
									<li>
										<p>
											1.能有效的防止各种类型CC攻击。
										</p>
										<p>
											2.实时系统监控，能观察系统的运行状态及网络连接状况。
										</p>
										<p>
											3.专业防范ASP、PHP、PERL、JSP等脚本程序的洪水式Flood调用导致数据库和WEB崩溃的拒绝服务攻击。
										</p>
										<p>
											4.其功能方便快捷，运行稳定。
										</p>
										<p>
											5.可通过IP和MAC的静态绑定，以最安全的方式和最好的性能实现ARP欺骗防护。
										</p>
										<p>
											6.智能检测Port扫描、SQL注入、密码猜测、Expolit利用等2000多种黑客入侵行为并阻断。
										</p>
										<p>
											&lt;!-再次点击以关闭-!&gt;
										</p>
									</li>
									<li>
										<p>
											1.能有效的防止各种类型CC攻击。
										</p>
										<p>
											2.实时系统监控，能观察系统的运行状态及网络连接状况。
										</p>
										<p>
											3.专业防范ASP、PHP、PERL、JSP等脚本程序的洪水式Flood调用导致数据库和WEB崩溃的拒绝服务攻击。
										</p>
										<p>
											4.其功能方便快捷，运行稳定。
										</p>
										<p>
											5.可通过IP和MAC的静态绑定，以最安全的方式和最好的性能实现ARP欺骗防护。
										</p>
										<p>
											6.智能检测Port扫描、SQL注入、密码猜测、Expolit利用等2000多种黑客入侵行为并阻断。
										</p>
										<p>
											&lt;!-再次点击以关闭-!&gt;
										</p>
									</li>
								</ul>
							</div>
    					</div>
    					<div class="con">
							<div class="item">
								<strong>DDOS介绍：</strong>
								<p>
									DDOS（Distributed Denial of Service）攻击指借助于客户/服务器技术， 将多个计算机联合起来作为攻击平台，对一个或多个目标发动DDOS攻击，从而成倍地提高拒绝服务攻击的威力。 通常，攻击者使用一个偷窃帐号将DDOS主控程序安装在一个计算机上，在一个设定的时间主控程序将与大量代理程序通讯， 代理程序已经被安装在网络上的许多计算机上。代理程序收到指令时就发动攻击。利用客户/服务器技术， 主控程序能在几秒钟内激活成百上千次代理程序的运行。
								</p>
							</div>
							<div class="item">
								<strong>DDOS攻击现象：</strong>
								<p>
									1.被攻击主机上有大量等待的TCP连接；
								</p>
								<p>
									2.网络中充斥着大量的无用的数据包
								</p>
								<p>
									3.源地址为假 制造高流量无用数据，造成网络拥塞，使受害主机无法正常和外界通讯；
								</p>
								<p>
									4.利用受害主机提供的传输协议上的缺陷反复高速的发出特定的服务请求，使主机无法处理所有正常请求；
								</p>
								<p>
									5.严重时会造成系统死机。
								</p>
							</div>
							<div class="item">
								<strong>主要功能：</strong>
								<p>
									1.能有效的防止各种类型DDOS攻击；
								</p>
								<p>
									2.实时系统监控，能观察系统的运行状态及网络连接状况。
								</p>
								<p>
									3.专业防范ASP、PHP、PERL、JSP等脚本程序的洪水式Flood调用导致数据库和WEB崩溃的拒绝服务攻击。
								</p>
								<p>
									4.智能检测Port扫描、SQL注入、密码猜测、Expolit利用等2000多种黑客入侵行为并阻断。
								</p>
								<p>
									5.可通过IP和MAC的静态绑定，以最安全的方式和最好的性能实现ARP欺骗防护。
								</p>
							</div>
							<div class="item">
								<strong>特点：</strong>
								<p>
									1.安装有CC防火墙防火墙的主机服务器可安装多块网卡,均将受到CC防火墙防火墙的全面保护。
								</p>
								<p>
									2.安装有CC防火墙防火墙的主机服务器可设置多个IP,均将受到CC防火墙防火墙的全面保护。	
								</p>
								<p>
									3.对主机服务器的IP地址不做任何限制，用户可结合自己需要随意更改，CC防火墙会自动保护新的IP。
								</p>
								<p>
									4.支持百兆和千兆网卡，不限制网络带宽，您的硬件配置越高抗攻击能力就越强。
								</p>
							</div>
    					</div>
    				</div>
    				<!-- 产品简介 -->
    				<div class="box2">
    					<div class="item">
    						<div class="title">产品特点</div>
    						<div class="con">
    							<img src="../../static/img/2.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">主界面</div>
    						<div class="con">
    							<img src="../../static/img/3.1.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">界面说明</div>
    						<div class="con">
    							<img src="../../static/img/3.2.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">服务端</div>
    						<div class="con">
    							<img src="../../static/img/3.3.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">配置项介绍-1</div>
    						<div class="con">
    							<img src="../../static/img/3.3.1.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">配置项介绍-2</div>
    						<div class="con">
    							<img src="../../static/img/3.3.2.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">程序未激活，需要联系兵者智能业务购买激活码才能使用</div>
    						<div class="con">
    							<img src="../../static/img/jihuoma.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">买到激活码之后输入</div>
    						<div class="con">
    							<img src="../../static/img/shurujihuoma.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">确认之后激活成功</div>
    						<div class="con">
    							<img src="../../static/img/jihuochenggong.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">防火墙工作状态</div>
    						<div class="con">
    							<img src="../../static/img/gongzuozhuantai.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">售后服务</div>
    						<div class="con">
    							<img src="../../static/img/7.png" alt="">
    						</div>
    					</div>
    				</div>
    				<!-- 安装使用 -->
    				<div class="box3">
    					<div class="item">
    						<div class="title">
    							双击exe安装程序,点击下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang1.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							兵者智能防火墙软件安装协议,点击下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang2.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							选择文件安装路径,点击下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang3.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							选择防火墙快捷启动方式位置,点击下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang4.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							选择是否创建防火墙桌面快捷启动方式,点击下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang5.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							安装确认，点击安装
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang6.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							防火墙正在安装到系统，请等待
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang7.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							安全提醒
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang8.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							这里我们选择不再提醒,允许程序所有操作
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang9.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							点击Next安装防火墙驱动
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang10.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							点击 I Agree (我同意)
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang11.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							点击 Install 安装
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang12.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							点击 Finish 继续下一步
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang13.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							弹出黑窗口询问是否重启,输入键盘y字符,回车,确认重启
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang14.png" alt="">
    						</div>
    					</div>

    					<div class="item">
    						<div class="title">
    							安装完成
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/anzhuang15.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							主界面
    						</div>
    						<div class="con">
    							<img src="../../static/img/anzhuang/zhujiemian.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							信息监控以及防护设置
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/information.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							来访信息界面
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/zhudongfangyu.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							来访信息设置
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/basicSettings.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							添加删除IP黑白名单
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/heibaimingdan.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							防火墙服务的开启或关闭
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/serviceOpenAndClose.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							客户端链接状态显示
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/lianjiezhuangtai.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							防火墙安全级别
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/anquanjibie.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							功能介绍
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/introduce.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/step1.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/step2.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/step3.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/step4.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/mainInterface/step5.png" alt="">
    						</div>
    					</div>
    				</div>
    				<!-- 成功演示 -->
    				<div class="box4">
    					<div class="item">
    						<div class="title">
    							服务器来访信息
    						</div>
    						<div class="con">
    							<img src="../../static/img/main/CCInformation.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							基本设置
    						</div>
    						<div class="con">
    							<img src="../../static/img/main/CCBasicSettings.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							使用说明
    						</div>
    						<div class="con">
    							<img src="../../static/img/main/CCUseInstructions.png" alt="">
    						</div>
    					</div>
    					<div class="item">
    						<div class="title">
    							退出
    						</div>
    						<div class="con">
    							<img src="../../static/img/main/CCExit.png" alt="">
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
export default {
  	name: 'paySys',
  	data () {
    	return {
    		bannerH:null,
    		Box2H:null,
    		isShow:false,
    		isActive:0,
    		Tabs:[
    			{tit:'兵者防火墙'},
    			{tit:'产品简介'},
    			{tit:'安装使用'},
    			{tit:'成功演示'}
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
    		this.bannerH = $(window).width()*0.3786;
    		// this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
    	},
    	tabsClick(index){
    		this.isActive = index;
			$('.content .padding>div').eq(index).show();
			$('.content .padding>div').eq(index).siblings().hide();
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