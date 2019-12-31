<template>
<div class="leasing">
  <div class="banner" :style="{height: bannerH+'px'}">
    <div class="img">
      <img src="../../static/img/images/leasing_banner_02.png" alt="">
    </div>
    <div class="banner_con">
      <div class="table_cell">
        <h1>服务器租赁</h1>
        <p>
          成熟的支撑系统  智能的解析技术
          
        </p>
        <p>
            高效的安全体系  流畅的访问体验
        </p>
      </div>
    </div>
  </div>
  <div class="nav">
    <ul>
      <li class="li tj" v-for="(item,index) in arr" @click="fuwuqiClick(index)" :class="index == navcur ? 'active':''">
        <p>{{item.title}}</p>
        
      </li>
    </ul>
  </div>
  <div class="con">
    <div class="con1">
      <ul>
        <template v-for="(item,index) in arr" v-if="index == navcur">
          <li v-for="(k,index) in item.list" @click="addClass(index)" :class="[index == current  ? 'tab2' : '']">
            {{k.tits}}
          </li>
        </template>
      </ul>
    </div>
    <div class="con2">
      <ul>
        <template v-for="(item,index) in arr" v-if="index == navcur">
          <template v-for="(k,index) in item.list" v-if="index == current">
            <li class="tab1" v-for="(m,index) in k.lists">
              <div class="title">
                <p>{{m.tit}}</p> <span>剩余<i>{{m.remaining}}</i>台</span>
              </div>
              <div class="img">
                <img src="../../static/img/images/leasing-icon2.png" alt="">
              </div>
              <div class="content">
                <div class="text">
                  <p>
                    {{m.p1}}
                  </p>
                  <p>
                    {{m.p2}}
                  </p>
                </div>
                <div class="con1">
                  {{m.con1}}
                </div>
                <button type="button" class="btn1" @click="zixun()">立即购买</button>
              </div>
            </li>
          </template>
          
        </template>

      </ul>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'leasing',
    data(){
      return{
        bannerH:null,
        navcur:0,
        current:0,
        
        arr:[]
      }
    },
    mounted(){
      var that = this;
      this.GetHeight();
      window.onresize = function(){ 
          that.GetHeight();
      };
      this.axios.get('/main/servertypes').then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.arr = response.data
        }
        
      }).catch(function (error) { // 请求失败处理
        console.log(error)
      })
    },
    methods:{
      GetHeight(){
        this.bannerH = $(window).width()*0.2781;
      },
      fuwuqiClick(index){
        this.navcur = index,
        this.current = 0
      },
      addClass:function(index){
        this.current = index
      },
      zixun(){
          this.$parent.talk(true);
      }
    }
  }

</script>

<style scoped>

</style>
