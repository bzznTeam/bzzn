<template>
	<div class="item download">
		<p>下载声明(本公司提供的所有软件，仅供学习和研究使用，不得用于任何商业用途。)</p>
		<ul>
			<template v-for="(item,index) in lists">
				<li>
					<div class="padding">
						<div class="tits">
							<p>{{item.title}}</p>
							<!-- <a :href="item.fileUrl">点击下载</a> -->
                            <a href="javascript:;" @click="getDownload(item.fileName)" >点击下载</a>
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
    		list:[
    			{
    				title:'兵者防火墙（兵者自主研发的一款智能软件防火墙。用于防止各类的CC攻击。运行稳定,方便快捷。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'Tomcat7.0（Tomcat服务器是一个免费的开放源代码的Web应用服务器。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'Java-JDK（Java是一种高度的安全性以及跨平台的网路语言。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'MySQL（MySQL是一个关系型数据库管理系统，由瑞典MySQLAB公司开发。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'Navicat（Navicat8用以帮助管理数据库，提供良好的，输入和输出环境。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'端口修改器（自动读取远程桌面服务开启状态，可开启/关闭远程桌面服务。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'广告查询工具（查询广告的最佳工具，准确度高，查询速度快)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'DBC2000（DBC2000数据库是我们在一些热门网络游戏中最常使用的。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'IIS服务器（IIS6.0安装包是由微软公司提供的基于运行的互联网基本服务。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'zend32（Zend公司针对PHP发布的至关重要的PHP网络应用。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'Editplus（Editplus是一款小巧但是功能强大的文本编辑器。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'Easyrecovery（easyrecovery非常强大的硬盘数据恢复软件，能够帮你恢复丢失的数据。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'压缩工具（好压是强大的压缩文件管理器，是完全免费的新一代压缩软件。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'DU Meter（DU Meter是显示直观的网络流量监视器，既有数字显示又有图形显示。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'PHP5（PHP是一种简单、轻便的服务器端脚本语言。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'OneKey（OneKey设计专业、操作简便,支持多硬盘、混合硬盘等。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'网站下载器（网站下载器是一个整站下载、离线浏览的最佳工具。)',
    				download:'../../static/download/bzzn.zip'
    			},

    			{
    				title:'端口查看工具（查看电脑开启的端口。)',
    				download:'../../static/download/bzzn.zip'
    			},
    			{
    				title:'一键安装tomat（一键安装tomcat，并保护tomcat正常启动!。)',
    				download:'../../static/download/bzzn.zip'
    			}
    		],
            lists:[]
    	}
  	},
  	mounted() {
  		this.axios.get('/main/files').then(response => {
            if (response.status === 200) {
                this.lists = response.data.data
            }
        }).catch(function (error) { // 请求失败处理
            console.log(error)
        })
  	},
  	methods: {
    	getDownload(name){
            window.open("/download/"+name)
        }
  	}
}
</script>