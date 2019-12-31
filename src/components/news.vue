<template>
  <div class="news">
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
    <div class="con_con">
      <div class="con4">
        <div class="title">
          <p>{{title}}</p>
        </div>
        <div class="time">
          <div class="img">
            <img src="../../static/img/images/news_icon.png" alt="">
          </div>
          <div class="con">
            {{time}}
          </div>
        </div>
        <div class="content" v-html="content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data(){
      return{
        id:null,
        title:null,
        time:null,
        content:''
      }
    },
    mounted () {
      this.url = this.$route.query.url
      console.log(this.url)
      this.axios.get('/main/'+this.url).then(res => {
        console.log(res)
        if (res.status === 200){
          this.time = res.data.cratetime;
          this.title = res.data.title;
          this.content = res.data.content;
        }

        // this.time = res.data;
      }).catch(function (err) {
          alert("网络错误，请重新加载！")
      })
    }
  }
</script>

<style scoped>

</style>
