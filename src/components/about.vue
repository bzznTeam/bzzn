<template>
<div class="about">
  <div class="banner" :style="{height: bannerH+'px'}">
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
        <li class="active">
          <router-link to="about">公司简介</router-link>
        </li>
        <li>
          <router-link to="gonggao1">兵者公告</router-link>
        </li>
        <li >
          <router-link to="gonggao2">兵者新闻</router-link>
        </li>
        <li>
          <router-link to="gonggao3">时事新闻</router-link>
        </li>
        <li>
          <router-link to="contact">联系方式</router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="con_con">
    <div class="con1">
      <div class="top">
        <div class="left">
          <div class="title">
            <div class="img">
              <img src="../../static/img/images/about_icon.png" alt="">
            </div>
            <div class="title1">
              湖北兵者智能科技有限公司
            </div>
          </div>
          <div class="con1_1">
            <p>  湖北兵者智能科技有限公司。创立于2011年，专注于网站技术
              的研究和开发，以"管理系统"为核心产品， 形成了针对不同行业
              、不同规模、不同应用提供专业性的解决方案，是国内专业的网
              站程序技术提供及服务商。
            </p>
            <br>
            <p>
              兵者智能是一家专业的软件开发企业，公司拥有多项自主版权的
              软件产品，在"平台管理系统"、"网站集群 管理"、"网上互动平
              台"领域卓有建树。用户遍及全国各省，同 时我们不断在技术上
              和应用进行创新和突破， 基于"管理系统"的集群解决方案，将网
              站含集群技术带上新的高度。
            </p>
            <br>
            <p>
              在高速成长的过程中，兵者智能建立了市场动作体系和客户保障
              机制， 形成了以软件产品开发、咨询规划服务、提供大型行业应
              用解决方案相结合的技术与业务服务体系， 将程序定位于信息整
              合、应用集成，全面提升了程序在各行业应用中的地位。"打造稳
              定的程序"是兵者智能的核心竞争力。凭借对软件和互联网行业的
              深刻理解，兵者智能将软件技术与互联网应用相结合，将领先业
              界的产品理念和丰富的产品开发经验相结合， 为用户提供简单、
              方便、安全、实用的协同应用软件产品和解决方案，帮助客户实
              现低成本、低风险、快起步、高效率的信息化目标。 亲切、开放、
              严谨的公司文化和科学规范的管理，凝聚着大量的优秀人才， 兵
              者智能拥有由优秀的职业经理人组成的管理团队和由资深IT专家
              组成的技术团队，他们在软件开发、推广和维护方面默契合作，
              深刻理解"以客户为中心"的含义，将"服务"贯穿于公司运作和管
              理的每一个细节，赢得客户广泛的信任和支持。
            </p>
          </div>
        </div>
        <div class="right">
          <div class="swipe">
            <div class="box1">
              <banner></banner>
            </div>
          </div>
          <div class="right_con">
            <ul>
              <li>
                <span>公司成立于</span>
                <p>2011</p>
                <span>年</span>
              </li>
              <li>
                <span>服务器类型</span>
                <p>12</p>
                <span>种</span>
              </li>
              <li>
                <span>开发研究中心</span>
                <p>3</p>
                <span>个</span>
              </li>
              <li>
                <span>涉及种类</span>
                <p>6</p>
                <span>种</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="img">
          <img src="../../static/img/images/about-icon1_03.png" alt="">
        </div>
        <div class="img">
          <img src="../../static/img/images/about-icon2_03.png" alt="">
        </div>
        <div class="img">
          <img src="../../static/img/images/about-icon3_03.png" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  
  import about_banner from '../../src/components/about_banner'

  export default {
    name: 'about',
    data(){
      return{
        bannerH:null,
        current:0,
        list1:[
          {title:'2018年春节放假通知尊敬的新老客户朋友们：',src:'../../static/img/images/about_gg_icon3_03.png',p1:'凯歌辞旧岁，骏狗迎新春。在此感谢新老客户朋友们对兵者智能的支持和信任！兵者\n' +
              '智能祝各位新老用户朋友们，狗年好运长似龙，家庭和睦多兴隆。',time:'2018-02-12 09:33'},
          {title:'2018年春节放假通知尊敬的新老客户朋友们：',src:'../../static/img/images/about_gg_icon4_03.png',p1:'凯歌辞旧岁，骏狗迎新春。在此感谢新老客户朋友们对兵者智能的支持和信任！兵者\n' +
              '智能祝各位新老用户朋友们，狗年好运长似龙，家庭和睦多兴隆。',time:'2018-02-12 09:33'},
          {title:'2018年春节放假通知尊敬的新老客户朋友们：',src:'../../static/img/images/about_gg_icon5_03.png',p1:'凯歌辞旧岁，骏狗迎新春。在此感谢新老客户朋友们对兵者智能的支持和信任！兵者\n' +
              '智能祝各位新老用户朋友们，狗年好运长似龙，家庭和睦多兴隆。',time:'2018-02-12 09:33'},
          {title:'2018年春节放假通知尊敬的新老客户朋友们：',src:'../../static/img/images/about_gg_icon6_03.png',p1:'凯歌辞旧岁，骏狗迎新春。在此感谢新老客户朋友们对兵者智能的支持和信任！兵者\n' +
              '智能祝各位新老用户朋友们，狗年好运长似龙，家庭和睦多兴隆。',time:'2018-02-12 09:33'},
        ]
      }
    },
    components:{
      'banner':about_banner,
    },
    mounted () {
      var that = this;
      this.GetHeight();
      window.onresize = function(){ 
          that.GetHeight();
      };
    },
    methods:{
      addClass:function(index){
        this.current = index;
      },
      GetHeight(){
        this.bannerH = $(window).width()*0.38125;
      }
    }
  }
</script>

<style scoped>

</style>
