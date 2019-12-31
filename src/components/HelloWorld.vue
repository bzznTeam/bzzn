<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="news()">点击</button>
    <router-link to="welcome" class="a">点击跳转到welcome </router-link>
    <p>
      {{list}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: ''
    }
  },
  methods: {
    news: function () {
      this.axios.get('http://192.168.1.109:8081/notices/titles').then(response => (
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    a{
      font-size: 24px;
      color:#f00;
    }
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
