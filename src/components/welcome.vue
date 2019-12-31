<template>
  <div class="warpper welcome">
    <div class="banner">
      <ul>
        <li style="background: url(../../static/img/banner.jpg) no-repeat center center;background-size:cover;">
          <div class="table-cell">
            <div class="text">
              <h4 class="wow fadeInUp">综合智能服务机器人&nbsp;&nbsp;&nbsp;智能服务就在身边</h4>
              <h5 class="wow fadeInUp" data-wow-delay="0.3s">开启机器人智能服务新时代</h5>
              <div class="en wow fadeInUp" data-wow-delay="0.6s">START A NEW ERA OF INTELLIGENT ROBOT SERVICES</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="mouse_scroll wow fadeInUp">
        <img src="../../static/img/mouse.png" alt="">
        <p>scroll down</p>
      </div>
    </div>
    <div class="box1">
      <div class="w1400">
        <div class="titles">
          <div class="cn">公司概况</div>
          <div class="en">
            /ABOUT US
          </div>
        </div>
        <div class="con">
          <div class="left">
            <div class="tit">湖北兵者智能科技有限公司</div>
            <div class="text">
              <p>
                创立于2011年，专注于网站技术的研究和开发，以"管理系统"为核心产品， 行成了针对不同行业、不同规模、不同应用提供专业性的解决方案，是国内专业的网站程序技术提供及服务商。
              </p>
              <p>
                兵者智能是一家专业的软件开发企业，公司拥有多项自主版权的软件产品，在"平台管理系统"、"网站集群 管理"、"网上互动平台"领域卓有建树。用户遍及全国各省，同时我们不断在技术上和应用进行创新和突破， 基于"管理系统"的集群解决方案，将网站含集群技术带上新的高度。
              </p>
            </div>
            <router-link to="about" class="link"><span>LEARN MORE</span><i>→</i></router-link>
          </div>
          <div class="right">
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="w1400">
        <div class="titles">
          <div class="cn">业务范围</div>
          <div class="en">
            /BUSINESS
          </div>
        </div>
        <div class="con">
          <ul>
            <li>
              <router-link to="robot" class="link">
                <div class="tit">
                  智能机器人
                </div>
                <div class="team">
                  <div class="pic">
                    <img src="../../static/img/index_box2_img1.jpg" alt="">
                  </div>
                  <div class="text">
                    仁者无敌，智能天下。人工智能大势所趋，我们致力研究双足智能机器人，智能服务就在身边。
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="game" class="link">
                <div class="tit">
                  手游开发
                </div>
                <div class="team">
                  <div class="pic">
                    <img src="../../static/img/index_box2_img2.jpg" alt="">
                  </div>
                  <div class="text">
                    专注于手机游戏开发，以工匠精神对 每个细节千锤百炼 精益求精。
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="payment" class="link">
                <div class="tit">
                  支付系统
                </div>
                <div class="team">
                  <div class="pic">
                    <img src="../../static/img/index_box2_img3.jpg" alt="">
                  </div>
                  <div class="text">
                    支付兑换系统，我们帮您个性定做， 让您的程序平台更加稳定，更加与众 不同。
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="paySys" class="link">
                <div class="tit">
                  防火墙
                </div>
                <div class="team">
                  <div class="pic">
                    <img src="../../static/img/index_box2_img4.jpg" alt="">
                  </div>
                  <div class="text">
                    兵者防火墙是兵者自主研发的一款防 止各类CC攻击的防火墙软件。
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="w1400">
        <div class="titles">
          <div class="cn">企业精神</div>
          <div class="en">
            /ENTERPRISE SPIRIT
          </div>
        </div>
        <div class="con">
          <ul>
            <li>
              <div class="padding">

                <div class="pic">
                  <img src="../../static/img/index_box3_icon1.png" alt="">
                </div>
                <div class="text">
                  <div class="tit">
                    专业团队运作
                  </div>
                  <div class="txt">
                    拥有硕士以上及海外工作经验的专业团队
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="padding">

                <div class="pic">
                  <img src="../../static/img/index_box3_icon2.png" alt="">
                </div>
                <div class="text">
                  <div class="tit">
                    诚信合作共赢
                  </div>
                  <div class="txt">
                    开诚布公 推心置腹 荣辱与共 肝胆相照
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="padding">

                <div class="pic">
                  <img src="../../static/img/index_box3_icon3.png" alt="">
                </div>
                <div class="text">
                  <div class="tit">
                    持续创新精神
                  </div>
                  <div class="txt">
                    持续不断地推出新的技术创新
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="padding">

                <div class="pic">
                  <img src="../../static/img/index_box3_icon4.png" alt="">
                </div>
                <div class="text">
                  <div class="tit">
                    引领未来科技
                  </div>
                  <div class="txt">
                    推动智能科技自主创新 建设企业员工美好家园
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box4">
      <div class="w1400">
        <div class="titles">
          <div class="cn">供应商招募</div>
          <div class="en">
            /Supplier recruitment
          </div>
        </div>
        <div class="con">
          <div class="text">
            <h6>兵者智能科技有限公司研发智能机器人项目，现长期招募供应商，具体如下：</h6>
            <p>
             <strong>一、招募类别</strong>
            </p>
            <p>
              能稳定大量提供适应智能机器人的各种零部件产品或大型机械工艺生产厂商， 产品包括但不限于各种紧固件/连接件、电子元器件/电工电气配附件、以及其他各种可用于机器人及外观的材质厂家等。
            </p>
            <p>
              <strong>二、应募供应商条件</strong>
            </p>
            <p>
              1.独立承担民事责任的法人，或具备国家认可经营资格的其他组织。
              2.能够提供与《营业执照》名称一致的发票，并能够以此名称独立签订合同。
              3.诚信守法、在业界享有良好的声誉。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="box5">
      <div class="w1400">
        <div class="titles">
          <div class="cn">新闻公告</div>
          <div class="en">
            /NEWS
          </div>
        </div>
        <div class="con">
          <div class="left" v-for="(item,index) in binList" v-if="index===0">
            <div class="tit">
              {{item.title}}
            </div>
            <div class="time">
              （ 时间：{{item.cratetime}}      来源：官方 ）
            </div>
            <div class="text">
              <div class="padding" v-html="item.content">

              </div>
            </div>
            <router-link to="gonggao1" class="link"><span>MORE</span><i>→</i></router-link>
          </div>
          <div class="right">
            <ul>
              <li v-for="(item,index) in binList" v-if="index===1">
                <router-link target="_blank" :to="{path:  '/news', query:{url:'findBinNews?id='+item.id}}" class="link">
                  <div class="tit">
                    <div class="tit_left">
                      {{item.title}}
                    </div>
                    <div class="tit_right">
                      {{item.cratetime}}
                    </div>
                  </div>
                  <div class="text" v-html="item.content">

                  </div>
                </router-link>
              </li>
              <li v-for="(item,index) in noticeList">
                <router-link target="_blank" :to="{path:  '/news', query:{url:'findNotice?id='+item.id}}"  class="link">
                  <div class="tit">
                    <div class="tit_left">
                      {{item.title}}
                    </div>
                    <div class="tit_right">
                      {{item.cratetime}}
                    </div>
                  </div>
                  <div class="text" v-html="item.content">

                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box6">
      <div class="w1400">
        <div class="titles">
          <div class="cn">联系我们</div>
          <div class="en">
            /CONTACT
          </div>
        </div>
        <div class="con">
          <div class="left">
            <div id="map"></div>
          </div>
          <div class="right">
            <p>
              <strong>服务热线：</strong>0712-2598512     13635828588
            </p>
            <p>
              <strong>联系地址：</strong>孝感市乾坤大道19号安业大厦5层0502房
            </p>
            <form onsubmit="return false">
              <div class="group">
                <div class="item">
                  <div class="padding">
                    <span>姓名：</span>
                    <input type="text" v-model="formMess.name">
                  </div>
                </div>
                <div class="item">
                  <div class="padding">
                    <span>Q Q ：</span>
                    <input type="text" v-model="formMess.qq">
                  </div>
                </div>
              </div>
              <div class="group">
                <div class="item">
                  <div class="padding">
                    <span>手机：</span>
                    <input type="text" v-model="formMess.phone">
                  </div>
                </div>
                <div class="item">
                  <div class="padding">
                    <span>备注：</span>
                    <input type="text" v-model="formMess.remark">
                  </div>
                </div>
              </div>
              <div class="group textarea">
                <div class="padding">
                  <span>需求：</span>
                  <textarea  v-model="formMess.demand"></textarea>
                  <button type="submit" @click="onSubmit()">提交</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  WOW
} from 'wowjs'
import BMap from 'BMap'
export default {
  name: 'welcome',
  data () {
    return {
      binList: [],
      noticeList: [],
      formMess: {
        'name': '',
        'phone': '',
        'qq': '',
        'demand': '',
        'remark': ''
      }
    }
  },
  created: function () {
    this.$emit('header', true)
  },
  mounted () {
    var that = this
    this.axios.get('/main/show').then(response => {
      if (response.status === 200) {
        this.binList = response.data.binNews,
        this.noticeList = response.data.notice
      }
      
    }).catch(function (error) { // 请求失败处理
      console.log(error)
    })

    var wow = new WOW({
      animateClass: 'animated'
    })
    wow.init()
    this.BaiduMap()
  },
  methods: {
    onSubmit () {
      /* json格式提交： */
      let formData = JSON.stringify(this.formMess)
      this.axios.post('/main/requirements', formData).then(res => {
        if(res.status == 200){
          $.MsgBox.Alert('',"提交成功");
          setTimeout(function(){
            $('.mb-box').addClass('show');
            setTimeout(function(){
              $(".mb-box,.overlay").remove();
            },2000)
          },200)
        }
      }).catch(function (error) { // 请求失败处理
        $.MsgBox.Confirm('提交失败',"请检查网络并重新提交");
          setTimeout(function(){
            $('.mb-box').addClass('show');
          },200)
      })
    },
    BaiduMap () {
      /** 地图初始化 start */
      var map = new BMap.Map('map') // 创建Map实例
      var point = new BMap.Point(113.94565, 30.923683)
      map.centerAndZoom(point, 19) // 初始化地图,设置中心点坐标和地图级别

      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker)
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '湖北兵者智能科技有限公司', // 信息窗口标题
        enableMessage: true, // 设置允许信息窗发送短息
        message: '安国大厦A座5楼'
      }
      var infoWindow = new BMap.InfoWindow('地址：安国大厦A座5楼', opts) // 创建信息窗口对象
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
      })
      map.setCurrentCity('孝感') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    }
  }
}

</script>
<style>
</style>
