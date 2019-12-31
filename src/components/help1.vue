<template>
	<div class="item">
		<ul>
			<template v-for="(item,index) in list">
				<li>
					<div class="padding">
						<div class="tits" @click="ShowToggle($event)">
							{{item.title}}
						</div>
						<div class="text" v-show="isShow" v-html="item.content">
							
						</div>
					</div>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
  	
  	data () {
    	return {
    		isShow:false,
            ItemShow:false,
    		isactive:0,
    		list:[
    			{
    				title:'1. 平台服务器遭遇攻击后，网站打不开了？',
    				content:'答：首先联系服务器机房工作人员进行处理，如果攻击比较大机房无法防护的话。建议修改程序访问路径的端口修改路径在：C:&#92;Tomcat6.0&#92;conf&#92;server.xml这个文件&#60;Connector port="80" protocol="HTTP/1.1"可修改数字80端口为你想修改的端口并保存 (此文件须用写字板方式打开,你修改的端口必须为此机器开放的端口具体端口是否开放可咨询服务器工作人员) 修改后在：计算机管理--服务--Apache Tomcat 6重启此项服务即可'
    			},
    			{
    				title:'2. 防火墙开启后，网站打不开？',
    				content:'答：关闭防火墙即可，关闭路径:右键网上邻居-属性-右键本地链接-属性-高级-设置-关闭-确定'
    			},
    			{
    				title:'3. 平台发送数据的端口有哪些？',
    				content:'答：详情请咨询平台客服人员'
    			},
    			{
    				title:'4. 重启平台服务器后，平台打不开了？',
    				content:'答：首先检查程序使用端口是否有冲突 文件格式是否改变，在到计算机管理--服务--Apache Tomcat 6重启此项服务'
    			},
    			{
    				title:'5. 没有任何操作，平台网站打不开了？',
    				content:'答：询问机房机器有没攻击 白名单是否通过 域名DNS是否正常，在到计算机管理--服务--Apache Tomcat 6检查此项，是否启动 排除以上问题还是不能访问的请联系兵者客服'
    			},
    			{
    				title:'6. 怎么样修改网银充值下限？',
    				content:'答：第一套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp4&#92;__top.jsp if(paymoney.value == "" || isNaN(paymoney.value) || parseInt(paymoney.value)<1){ alert("请填写充值金额"); 修改数字1为你想要设置的最低金额 (请填写充值金额) 此字可修改 第二套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp5&#92;__top.jsp 修改内容同上 第三套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp6&#92;dispatch_payway.jsp 修改内容同上 充值链接金额设置修改路径同上，注意以上文件必须用记事本方式打开修改'
    			},
    			{
    				title:'7. 玩家充值成功了，平台接收不到接口回调？',
    				content:'答：平台接收不到接口回调首先检查接口后台有没有此单。如果有此单就通知程序机器机房释放程序机器IP，在检查下域名DNS是否正常此问题是由接口回调机器跟平台机器之间网络不通畅。域名DNS不稳定,接口回调机器搜寻不到DNS，还有机器有CC攻击也会回调不回，另外一个就是接口后台设置的平台回调网站端口跟程序现在访问使用的端口不一致也会出现不能正常回调'
    			},
    			{
    				title:'8. 充值页面的QQ在那个地方填写？',
                    content:'答：第一套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp4&#92;_foot.jsp　　订单查询，官方卡类查询，以上2项只能替换保留其中一项进行替换 第二套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp5&#92;_foot.jsp　　订单查询，官方卡类查询，以上2项只能替换保留其中一项进行替换 第三套充值模版路径：ROOT&#92;jsp&#92;recharge&#92;temp6&#92;query_order.jsp　　订单查询，官方卡类查询，以上2项只能替换保留其中一项进行替换 替换代码： &#60a href="http: // wpa.qq.com/msgrd?v=1&uin=QQ号码&site=qq&menu=yes" target="_blank"&#62  注意以上文件必须用记事本方式打开修改替换'
    			},
    			{
    				title:'9. 商户登陆页面的充值QQ在那个地方修改添加？',
    				content:'答：ROOT&#92;res&#92;style&#92;userLogin&#92;jsps&#92;userLogin1.jsp 搜索：<s:property value="#ywqq"/> 全部替换为你想要替换的QQ号码 保存即可，在刷新页面 如果提示QQ未启用 可直接百度搜索QQ未启用即可解决'
    			},
    			{
    				title:'10. 平台服务器要做系统，如何保存数据？',
    				content:'答：首先在计算机管理--服务--Apache Tomcat 6 ，计算机管理--服务--MySQL停止此2项 在到C:&#92;Documents and Settings&#92;All Users&#92;Application Data&#92;MySQL&#92;MySQL Server 5.1这个路径 对data文件进行压缩打包保存'
    			},
    			{
    				title:'11. 出现异常补发怎么查看 怎么解决？',
    				content:'答：首先检查程序管理后台和商户是否有异常登录IP，如果有异常登录IP，请做好登录限制， 在网关上勾选禁止补发'
    			},
    			{
    				title:'12. 不匹配ip访问网关来源是什么原因？',
    				content:'答：首先查看网关上提示的IP是否是程序机器的IP，如果是程序机器上的IP，那就是当前网关有破坏，重新下载网关即可，非平台程序机器的IP，可联系机房屏蔽此IP对机器的访问'
    			},
    			{
    				title:'13. 没有设置扣单，平台后台自动就把单给扣了？',
    				content:'答：详出现此项问题，可到平台管理后台检查商户提成里面的比列，有代理的也在代理后台调整一下，注意 商户比列不可大于接口比列 接口比列和商户比列最低差别为1，例接口比列96%，商户比列95%情请咨询平台客服人员'
    			},
    			{
    				title:'14. 充值链接哪里网银没有显示？',
    				content:'答：打开平台管理后台-通道管理-通道列表，查看网银接口是否启用，如未启用，开启即可'
    			},
    			{
    				title:'15. 点卡新出更高面值的，在那个地方添加？',
    				content:'答：不建议个人修改，详情请咨询平台客服'
    			},
    			{
    				title:'16. 服务器被入侵后平台程序文件会出现哪些异常？',
    				content:'答：详情请咨询平台客服'
    			},
    			{
    				title:'17. 商户后台被入侵后会出现那些异常，如何防范？',
    				content:'答：详情请咨询平台客服'
    			},
    			{
    				title:'18. 网银充值，出现，签名验证失败，是什么情况？',
    				content:'答：提交给接口的参数不正确，详情请咨询接口商，或平台运营商'
    			},
    			{
    				title:'19. 商户登陆页面隐藏怎么做？',
    				content:'答：ROOT路径下的index.jsp修改此文件的名字，例如：修改为123.jsp，访问就在域名后面加上123.jsp(http://www.baidu.com/123.jsp)'
    			},
    			{
    				title:'20. 平台上面有充值，但是网关上没，也没领到元宝？',
    				content:'答：检查一下网关上设置的，ip，端口，账号密码，是否正确，通知机房，释放网关服务器ip，和程序服务器ip'
    			},
    			{
    				title:'21. 平台服务器，端口被C后，如何自己更改平台端口？',
    				content:'答：建议修改程序访问路径的端口修改路径在：C:&#92;Tomcat6.0&#92;conf&#92;server.xml这个文件 <Connector port="80" protocol="HTTP/1.1"可修改数字80端口为你想修改的端口并保存 (此文件须用写字板方式打开,你修改的端口必须为此机器开放的端口具体端口是否开放可咨询服务器工作人员) 修改后在：计算机管理--服务--Apache Tomcat 6重启此项服务即可'
    			}

    		]
    	}
  	},
  	mounted() {
  		
  	},
  	methods: {
    	ShowToggle(e){
    		var that = $(e.currentTarget);
    		if (that.parents('li').hasClass('on')) {
    			that.parents('li').removeClass('on');
    			that.siblings().stop(true,false).slideUp()
    		}else{
    			that.parents('li').addClass('on')
    			that.siblings().stop(true,false).slideDown();
    			that.parents('li').siblings().find('.text').slideUp();
    			that.parents('li').siblings().removeClass('on')
    		}
    	}
  	}
  	
}
</script>