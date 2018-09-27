<template>
  <div id="app">
    <!-- 顶部标题 -->
    <mt-header   title="信息管理系统">
    </mt-header>
    <router-view/>
    <!--  底部-->
    <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <img slot="icon" src="../static/img/index.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="会员">
          <img slot="icon" src="../static/img/vip.png">
          会员
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <img slot="icon" src="../static/img/shopcart.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="查找">
          <img slot="icon" src="../static/img/search.png">
          查找
        </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return  {
       selected:''
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
