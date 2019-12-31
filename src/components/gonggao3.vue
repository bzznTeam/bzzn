<template>
  <div class="gonggao1">
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
          <li >
            <router-link to="gonggao2">兵者新闻</router-link>
          </li>
          <li class="active">
            <router-link to="gonggao3">时事新闻</router-link>
          </li>
          <li>
            <router-link to="contact">联系方式</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="con_con">
      <div class="con2">

        <div class="top">
          <div class="right">
            <ul>
              <li v-for="(item) in gonggaoList" >
                <!--<router-link :to="/about/gonggao/news/id=item.noticeId" :data-id="item.noticeId">-->
                <router-link target="_blank" :to="{path:  '/news', query:{url:'findNotice?id='+item.id}}" :data-id="item.id">

                  <div class="right_con">
                    <p>{{item.title}}</p>
                    <span>{{ item.cratetime}}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <!--<router-view></router-view>-->
    </div>
  </div>
</template>

<script>
  import about_banner from '../../src/components/about_banner'
  export default {
    name: 'gonggao3',
    data () {
      return {
        current:0,
        gonggaoList: []
      }
    },
    components:{
      'banner':about_banner,
    },
    mounted () {
      this.axios.get('/main/findAllBinNews').then(res => {
        this.gonggaoList = res.data;
      }).catch(function (err) {

      })
    },
    methods:{
      addClass:function(index){
        this.current = index;
      }
    }

  }
</script>

<style scoped>

</style>
