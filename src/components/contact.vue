<template>
  <div class="contact">
    <div class="banner">
      <div class="img">
        <img src="../../static/img/images/about_banner_02.png" alt="">
      </div>
      <div class="banner_con">
        <div class="table_cell">
          <p class="p1">About us </p>
          <p class="p2">
            国内专业的网站程序技术
            <br>
            提供及服务商
          </p>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav_con">
        <ul>
          <li>
            <router-link to="about">公司简介</router-link>
          </li>
          <li>
            <router-link to="gonggao1">兵者公告</router-link>
          </li>
          <li>
            <router-link to="gonggao2">兵者新闻</router-link>
          </li>
          <li>
            <router-link to="gonggao3">时事新闻</router-link>
          </li>
          <li class="active">
            <router-link to="contact">联系方式</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="con_con">
      <div class="con3">
        <div class="con1">
          <ul>
            <li>
              <div class="title">
                <img src="../../static/img/images/about_contact_icon3.png" alt="">
                商务咨询
              </div>
              <div class="con">
                <p>
                  咨询QQ ：5593664 (兵者智能科技-教官)
                  <br>
                  服务热线：0712-2598512
                </p>
              </div>
            </li>
            <li>
              <div class="title">
                <img src="../../static/img/images/about_contact_icon2.png" alt="">
                联系方式
              </div>
              <div class="con">
                <p>
                  联系电话：13635828588
                  <br>
                  联系地址：孝感市乾坤大道19号安国大厦5层0502房
                </p>
              </div>
            </li>
            <li>
              <div class="title">
                <img src="../../static/img/images/about_contact_icon1.png" alt="">
                商务咨询
              </div>
              <div class="con">
                <p>
                  游戏定制
                  <br>
                  畅玩卡五星
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="con2">
          <form action="" οnsubmit="return false">
            <div class="con2_1">
              <ul>
                <li>
                  <span>姓名：</span><input type="text" placeholder="必填-请填写真实姓名" v-model="formMess.name">
                </li>
                <li>
                  <span>Q Q：</span><input type="text" placeholder="必填-请填写真实QQ" v-model="formMess.qq">
                </li>
              </ul>
            </div>
            <div class="con2_1">
              <ul>
                <li>
                  <span>手机：</span><input type="text" placeholder="必填-请填写手机号码" v-model="formMess.phone">
                </li>
                <li>
                  <span>备注：</span><input type="text" v-model="formMess.remark">
                </li>
              </ul>
            </div>
            <div class="con2_1">
              <span>需求：</span>
              <textarea  v-model="formMess.demand" class="txt1"></textarea>
            </div>
            <div class="con2_2">
              <input type="button" value="提交"  @click="onSubmit()">
            </div>
          </form>
        </div>
        <div class="con4">
          <div id="map1"></div>
        </div>
      </div>
      <!--<router-view></router-view>-->
    </div>
  </div>
</template>

<script>
  import about_banner from '../../src/components/about_banner'
  export default {
    name: 'contact',
    data(){
      return{
        formMess: {
          'name': '',
          'phone': '',
          'qq': '',
          'demand': '',
          'remark': ''
        }
      }
    },
    mounted () {
      this.BaiduMap()
    },
    components:{
      'banner':about_banner,
    },
    methods: {
      BaiduMap () {
        /** 地图初始化 start */
        var map = new BMap.Map('map1') // 创建Map实例
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
      },
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
      addClass:function(index){
        this.current = index;
      }
    }
  }
</script>

<style scoped>

</style>
