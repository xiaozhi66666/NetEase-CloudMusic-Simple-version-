<template>
  <div>
    <!-- 网易云音乐主页面头部S -->
    <div class="header">
      <!-- 标题随路由中的meta中自定义的title进行切换 -->
      <van-nav-bar :title="$route.meta.title" class="nav-barheader" fixed />
    </div>
    <!-- 网易云音乐主页面头部E -->
    <!-- 放置二级路由页面，中间切换部分 -->
    <router-view></router-view>
    <!-- 网易云音乐主页面底部S -->
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">home</van-tabbar-item>
        <van-tabbar-item icon="search" to="/layout/search"
          >search</van-tabbar-item
        >
      </van-tabbar>
    </div>
    <!-- 网易云音乐主页面底部E -->
  </div>
</template>

<script>
export default {
  name: "NeteaseCloudmusicIndex",

  data() {
    return {
      // active  ==> 用来切换高亮效果
      //   active: 0,
      //   title: this.$route.meta.title,
    };
  },
  created() {},
  mounted() {},
  //   watch: {   // ===> 第一种方式，监听$route的变化，只要发生变化了就将title重新赋值
  //     $route() {
  //       //   console.log(newVal, oldVal);  ==>可以获取到在route规则设置时候添加的meta值
  //       this.title = this.$route.meta.title;
  //     },
  //   },
  methods: {},
};
</script>

<style lang="less" scoped>
.header {
  padding-top: 48px;
}
.footer {
  padding-top: 46px;
}
</style>