<template>
  <div class="home-container">
    <!-- 推荐歌单S -->
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image width="111" height="100" src="" />
        <p class="music-name van-multi-ellipsis--l2">12312312</p>
      </van-grid-item>
    </van-grid>
    <!-- 推荐歌单E -->
  </div>
</template>

<script>
export default {
  name: "NeteaseCloudmusicIndex",

  data() {
    return {
      recommend: [],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
}
</style>