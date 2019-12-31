<template>
  <div class="header">
    <div class="header_top w1400">
      <router-link to="/" exact class="bz_logo" @click.native="refresh">
        <img class="logo1" src="../../static/img/logo.png"  alt="湖北兵者网络技术服务有限公司">
        <img class="logo2" src="../../static/img/logo.png" alt="湖北兵者网络技术服务有限公司">
      </router-link>
      <div class="bz_menu">
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
      </div>

      <!-- <div class="login_register">
        <router-link to="login" class="login_btn">登录</router-link>

        <a href="register.html" class="register_btn">
          注册
        </a>
      </div> -->
      <div class="nav">
        <ul>
          <li class="active">
            <router-link to="/" exact >首页</router-link>
          </li>
          <li>
            <router-link to="robot" >智能机器人</router-link>
          </li>
          <li>
            <router-link to="game" >定制游戏</router-link>
          </li>
          <li>
            <router-link to="payment">支付程序</router-link>
          </li>
          <li>
            <router-link to="leasing" >服务器租赁</router-link>
          </li>
          <li>
            <router-link to="channels" >接口合作</router-link>
          </li>
          <li>
            <router-link to="service" >单项服务</router-link>
          </li>
          <li>
            <router-link to="recruitment" >诚聘英才</router-link>
          </li>
          <li>
            <router-link to="about" >关于我们</router-link>
          </li>
          <li>
            <router-link to="help" >帮助中心</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav_left">
      <div class="bz_menu">
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
      </div>
    </div>
    <nav class="bz_nav">
      <ul>
        <li>
          <router-link to="robot" @click.native="refresh">
            <div class="display">
              <div class="cn">智能机器人</div>
              <div class="line"></div>
              <div class="en">robot</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="game" @click.native="refresh">
            <div class="display">
              <div class="cn">定制游戏</div>
              <div class="line"></div>
              <div class="en">game</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="payment" @click.native="refresh">
            <div class="display">
              <div class="cn">支付程序</div>
              <div class="line"></div>
              <div class="en">Payment</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="leasing" @click.native="refresh">
            <div class="display">
              <div class="cn">服务器租赁</div>
              <div class="line"></div>
              <div class="en">leasing</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="channels" @click.native="refresh">
            <div class="display">
              <div class="cn">接口合作</div>
              <div class="line"></div>
              <div class="en">interface</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="service" @click.native="refresh">
            <div class="display">
              <div class="cn">单项服务</div>
              <div class="line"></div>
              <div class="en">service</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="recruitment" @click.native="refresh">
            <div class="display">
              <div class="cn">诚聘英才</div>
              <div class="line"></div>
              <div class="en">Recruitment</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="about" @click.native="refresh">
            <div class="display">
              <div class="cn">关于我们</div>
              <div class="line"></div>
              <div class="en">about</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="help" @click.native="refresh">
            <div class="display">
              <div class="cn">帮助中心</div>
              <div class="line"></div>
              <div class="en">help</div>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods:{
    refresh:function(){
　　　this.$router.go(0);  
　　}
　}

}
</script>

<style>
</style>
