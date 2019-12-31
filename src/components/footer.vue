<template>
  <div class="footer">
    <p>
      <a href="">6.10平台程序</a> |
      <a href="">安全联盟</a> |
      <a href="">法律声明</a> |
      <a href="">站长统计</a>
    </p>
    <p>
      <template v-if="domain == 'www.81145.com'">
        <a class="footLink xuke" target="_blank" href="../../static/img/eb220130090.jpg" title="经营许可证">鄂B2-20130090</a> | 鄂ICP备14010419号-4| <a class="footLink" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42090202000089" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../../static/img/beian.png" style="float:left;"/>鄂公网安备 42090202000089号</a>|统一社会信用代码：914209005824858520|<a class="footLink ruanjian" target="_blank" href="../../static/img/CCF20120716_00004.jpg" title="软件著作权">兵者软件著作证书</a>
      </template>
      <template v-else-if="domain == 'www.idc34.com'">
        <a class="footLink xuke" target="_blank" href="../../static/img/eb220130090.jpg" title="经营许可证">鄂B2-20130090</a> | 鄂ICP备14010419号-1| <a class="footLink" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42090202000090" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../../static/img/beian.png" style="float:left;"/>鄂公网安备 42090202000090号</a>|统一社会信用代码：914209005824858520|<a class="footLink ruanjian" target="_blank" href="../../static/img/CCF20120716_00004.jpg" title="软件著作权">兵者软件著作证书</a>
      </template>
      <template v-else="domain == 'www.chinabzwl.com'">
        <a class="footLink xuke" target="_blank" href="../../static/img/eb220130090.jpg" title="经营许可证">鄂B2-20130090</a> | 鄂ICP备14010419号-6|<a class="footLink" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42090202000124" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../../static/img/beian.png" style="float:left;"/>鄂公网安备 42090202000124号</a>| 统一社会信用代码：914209005824858520| <a class="footLink ruanjian" target="_blank" href="../../static/img/CCF20120716_00004.jpg" title="软件著作权">兵者软件著作证书</a>
      </template>
      
    </p>
    <p>
      湖北兵者智能科技有限公司 版权所有©2011-2018 |本站常年法律顾问：湖北山川律师事务所-谈伟律师
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        domain:null
      }
    },
    mounted() {
      this.axios.get('/main/domain').then(response => {
          if (response.status === 200) {
              console.log(response),
              this.domain = response.data
          }
      }).catch(function (error) { // 请求失败处理
          console.log(error)
      })
    }
  }
</script>

<style>
</style>
