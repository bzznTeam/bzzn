<template>
  <div class="mains">
    <login-header v-if="login_header_show"></login-header>
    <div class="warpper login">
      <div class="content">
        <div class="w1180">
          <div class="padding">
            <form @submit.prevent="submit">
              <div class="form-control">
                <input type="text" placeholder="请输入用户名">
              </div>
              <div class="form-control">
                <input type="password" placeholder="请输入密码">
              </div>
              <button type="submit">登录</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from './login_header'
export default {
  name: 'login',
  data () {
    return {
      login_header_show: true
    }
  },
  components: {
    'login-header': LoginHeader
  },
  created: function () {
    this.$emit('header', false)
  },
  methods: {
    // 是否显示头部

    login_header: function (bool) {
      this.login_header_show = bool
    },
    submit: function (event) {
      this.axios.get('/account/getAccount/167', {
        name: '111'
      }).then(response => (
        console.log('成功'),
        this.list = response.data
      )).catch(function (error) { // 请求失败处理
        console.log('失败'),
        console.log(error)
      })
    }

  }
}
</script>

<style>
  html,
  body,
  .mains,
  .main,
  #app {
    width: 100%;
    height: 100%;
  }

  .main {
    padding: 0;
  }

  .warpper {
    padding-bottom: 0;
  }
</style>
