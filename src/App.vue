<template>
  <div id="app" v-cloak>
    <div class="main">
      <app-talk v-if="talk_show" v-on:talk="talk"></app-talk>
      <app-header v-if="header_show"></app-header>
      <router-view v-on:header="header" v-on:footer="footer"></router-view>
    </div>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import talk from './components/talk'
export default {
  name: 'App',
  data () {
    return {
      header_show: true,
      footer_show: true,
      talk_show: false
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-talk': talk
  },
  methods: {
    // 是否显示头部
    header: function (bool) {
      this.header_show = bool
    },
    // 是否显示尾部
    footer: function (bool) {
      this.footer_show = bool
    },
    talk: function (bool) {
      this.talk_show = bool
    }
  }
}
</script>

<style>
  #app {
    font-family: "Microsoft Yahei", "Microsoft JhengHei", "Helvetica Neue", Helvetica, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  [v-cloak] {

    display: none;

  }
</style>
