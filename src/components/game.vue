<template>
<div class="game">
  <div class="banner" :style="{height: bannerH+'px'}">
    <div class="pic">
      <img src="../../static/img/robot_banner_01.jpg" alt="">
    </div>
    <div class="banner_con">
      <div class="table_cell">
        <h1>定制游戏</h1>
        <p>
          专注于游戏开发
          <br />
          以工匠精神对每个细节 千锤百炼 精益求精
        </p>
      </div>
    </div>
  </div>
  <div class="service">
    <div class="service_con">
      <ul>
        <li>
          <div class="li_img margin_b">
            <img src="../../static/img/images/robot-icon1.png" alt="">
          </div>
          <div class="service_con_con">
            <p>
              源码语言开发环境
            </p>
            <span>
              开发语言C++/lua，服务端C++， 开发引擎cocos2d-x
            </span>
          </div>
        </li>
        <li>
          <div class="service_con_con">
            <p>
              平台稳定，可维护性
            </p>
            <span>
              后台管理可配，运维工具齐全
            </span>
          </div>
          <div class="li_img margin_t">
            <img src="../../static/img/images/robot-icon2.png" alt="">
          </div>
        </li>
        <li>
          <div class="li_img margin_b">
            <img src="../../static/img/images/robot-icon3.png" alt="">
          </div>
          <div class="service_con_con">
            <p>
              代码及开发文档规范
            </p>
            <span>
              源码开发性高，支持二次开发
            </span>
          </div>
        </li>
        <li>
          <div class="service_con_con">
            <p>
              免费培训，快速掌握
            </p>
            <span>
              一对一免费技术培训快速掌握
            </span>
          </div>
          <div class="li_img margin_t">
            <img src="../../static/img/images/robot-icon4.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="gamebox">
    <div class="gamebox_con">
      <div class="gamebox_con_left">
        <router-link to="game_chuanqi">
          <div class="gamebox_con_left_img">
            <img src="../../static/img/images/robot-img1_07.png" alt="">
          </div>
          <div class="gamebox_con_left_yy">
          </div>
          <div class="gamebox_con_left_con">
            <div class="gamebox_con_left_con1">
              <div class="table_cell">
                <p>
                  传奇类游戏开发
                  <br>
                  LEGEND GAME
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="gamebox_con1_right">
        <div class="gamebox_con1_right_top1 margin_b">
          <router-link to="game_majiang">
            <div class="top1_img">
              <img src="../../static/img/images/images/robot-img2_07.png" alt="">
            </div>
            <div class="top1_con">
              <div class="con1">
                <div class="table_cell">
                  <p>
                    麻将游戏开发 / LAHJONG GAME
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="gamebox_con1_right_top1 ">
          <router-link to="game_shisanzhang">
            <div class="top1_img">
              <img src="../../static/img/images/images/robot-img3_07.png" alt="">
            </div>
            <div class="top1_con">
              <div class="con1">
                <div class="table_cell">
                  <p>
                    十三张游戏开发 / THIRTEEN GAME
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="more_con">
        <router-link to="game_more" class="link">查看更多>></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'game',
    data() {
      return {
        bannerH:null
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
        this.bannerH = $(window).width()*0.40625;
        // this.Box2H = $('.box2 ul li:eq(0)').find('.text').height();
      },
    }
  }
</script>

<style scoped>

</style>
