<template>
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner">
        <div class="swiper-img flex3">
          <img :src="item.src" width="100%"   alt="banner" style="display:block;">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import '../../node_modules/swiper/css/swiper.min.css';
  export default {
    name: 'about_banner',
    data () {
      return {
      banner:[
        {src:'../../static/img/images/about_jj_banner1.png'},
        {src:'../../static/img/images/about_jj_banner2.png'},
        {src:'../../static/img/images/about_jj_banner3.png'},
      ]
      }
    },
    // props: ['banner'],    //首页传过来的数据
    mounted () {
      var mySwiper = new Swiper('.swiper1', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: 2000,
        paginationClickable: true,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
        preventClicks: false,
        speed: 600,
        observer: true,
        loop: true,
        observeParents: true
      })
    }
  }
</script>

<style scoped>

</style>
