<template>
<div class="talk">
  <div class="box">
    <div class="title">
      <div class="img1" @click="close()">
        <img src="../../static/img/images/talk_icon6.png" alt="">
      </div>
    </div>
    <div class="con1">
      <ul>
        <li>
          <div class="title">
            <div class="title_con">
              <div class="img">
                <img src="../../static/img/images/talk_icon4.png" alt="">
              </div>
              <div class="title_con1">
                售前咨询
              </div>
            </div>
          </div>
          <div class="con1_1">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2851659702&site=qq&menu=yes">
              <div class="title_con">
                <div class="title_con1">
                  <p>
                    2851659702
                    <br>
                    兵者智能-小蝶
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="con1_1">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2851659702&site=qq&menu=yes">
              <div class="title_con">
                <div class="title_con1">
                  <p>
                    2851659700
                    <br>
                    兵者智能-小蝶
                  </p>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="title_con">
              <div class="img">
                <img src="../../static/img/images/talk_icon3.png" alt="">
              </div>
              <div class="title_con1">
                业务咨询
              </div>
            </div>
          </div>
          <div class="con1_2">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=5593664&site=qq&menu=yes">
              <div class="title_con">
                <div class="title_con1">
                  <p>
                    5593664
                    <br>
                    兵者智能-教官
                  </p>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="title_con">
              <div class="img">
                <img src="../../static/img/images/talk_icon1.png" alt="">
              </div>
              <div class="title_con1">
                技术售后
              </div>
            </div>
          </div>
          <div class="con1_2">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2851659701&site=qq&menu=yes">
              <div class="title_con">
                <div class="title_con1">
                  <p>
                    2851659701
                    <br>
                    兵者智能-售后
                  </p>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="title_con">
              <div class="img">
                <img src="../../static/img/images/talk_icon5.png" alt="">
              </div>
              <div class="title_con1">
                投诉建议
              </div>
            </div>
          </div>
          <div class="con1_2">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=5132703&site=qq&menu=yes">
              <div class="title_con">
                <div class="title_con1">
                  <p>
                    5132703
                    <br>
                    兵者智能-投诉
                  </p>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="con2">
      <p>温馨提示 : 购买程序请认准公司网站和客服QQ号码 <strong><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=5593664&site=qq&menu=yes">5593664 (兵者智能-教官 )</a></strong>。</p>
      <p>温馨提示 : 全国业务咨询热线：0712-2598512。</p>
      <p>温馨提示 : 商务专线 ：13635828588</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'talk',
    methods:{
      close(){
        this.$emit('talk', false);
      }
    }
  }
</script>

<style scoped>

</style>
