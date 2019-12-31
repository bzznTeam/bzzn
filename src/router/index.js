import Vue from 'vue'
import Router from 'vue-router'

import robot from '@/components/robot'
import welcome from '@/components/welcome'
import payment from '@/components/payment'
import channels from '@/components/channels'
import service from '@/components/service'
import recruitment from '@/components/recruitment'
import help from '@/components/help'
import about from '@/components/about'
import game from '@/components/game'
import game_chuanqi from '@/components/game_chuanqi'
import game_majiang from '@/components/game_majiang'
import game_shisanzhang from '@/components/game_shisanzhang'
import leasing from '@/components/leasing'
import paySys from '@/components/paySys'
import game_more from '@/components/game_more'
import gonggao1 from '@/components/gonggao1'
import gonggao2 from '@/components/gonggao2'
import gonggao3 from '@/components/gonggao3'
import contact from '@/components/contact'
import news from '@/components/news'
import talk from '@/components/talk'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/robot',
      name: 'robot',
      component: robot
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/channels',
      name: 'channels',
      component: channels
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: recruitment
    },
    {
      path: '/help',
      name: 'help',
      component: help,
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/game_chuanqi',
      name: 'game_chuanqi',
      component: game_chuanqi
    },
    {
      path: '/game_majiang',
      name: 'game_majiang',
      component: game_majiang
    },
    {
      path: '/game_shisanzhang',
      name: 'game_shisanzhang',
      component: game_shisanzhang
    },
    {
      path: '/leasing',
      name: 'leasing',
      component: leasing
    },
    {
      path: '/paySys',
      name: 'paySys',
      component: paySys
    },
    {
      path: '/game_more',
      name: 'game_more',
      component: game_more
    },
    {
      path: '/gonggao1',
      name: 'gonggao1',
      component: gonggao1
    },
    {
      path: '/gonggao2',
      name: 'gonggao2',
      component: gonggao2
    },
    {
      path: '/gonggao3',
      name: 'gonggao3',
      component: gonggao3
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    }
  ],
  //解决跳转页面不在顶部
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
})
