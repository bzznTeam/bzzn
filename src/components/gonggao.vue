<template>
  <div class="con2">
  <div class="top">
  <div class="left">
  <div class="title">
  <div class="img">
  <img src="../../static/img/images/about_gg_icon1.png" alt="">
  </div>
  <div class="title1">
  兵者公告
  </div>
  </div>
  <div class="con2_1">
  <div class="title">
  <div class="time">
  <span>2019</span>
  <br>
  <span>
  <strong>01/28</strong>
  16:12
  </span>
  </div>
  </div>
  <div class="img">
  <div class="img1">
  <img src="../../static/img/images/about_gg_icon2_03.png" alt="">
  </div>
  </div>
  <div class="con2_11">
  <div class="con2_111">
  <p>2019年春节放假通知</p>
  <span>尊敬的新老客户朋友们：猪年新春到，新春无限妙。在此，感
  谢新老客户朋友们对兵者智能的支持和信任！兵者智能祝各位
  新老用户朋友们：位高权重责任轻，钱多事少离家近，每天睡
  到自然醒，工资领到手抽筋，奖金多到车来运，别人加班你加
  薪。猪年鸿运!</span>
  </div>
  </div>
  </div>
  </div>
  <div class="right">
  <ul>
  <li v-for="(item) in list1">
  <router-link to="#">
  <div class="img">
  <img :src="item.src" alt="">
  <!--<img src="../../static/img/images/about_gg_icon3_03.png" alt="">-->
  </div>
  <div class="right_con">
  <p>{{item.title}}</p>
  <span>{{item.p1}}</span>
  <br>
  <span style="float: right;margin-right: 5px">{{ item.time}}</span>
  </div>
  </router-link>
  </li>
  </ul>
  </div>
  </div>
  <div class="bottom">
  <div class="dh">
  <div class="left">
  <
  </div>
  <div class="middle">
  <ul>
  <li class="active">1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  </ul>
  </div>
  <div class="right">
  >
  </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'gonggao',
    data(){
      return{
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
    }

  }
</script>

<style scoped>

</style>
