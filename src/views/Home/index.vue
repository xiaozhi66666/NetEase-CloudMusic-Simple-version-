<template>
  <div class="home-container">
    <!-- 推荐歌单S -->
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in recommendList" :key="item.id">
        <van-image
          width="111"
          height="100"
          :src="item.picUrl"
          fit="cover"
          class="van-item-img"
        />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <!-- 推荐歌单E -->
    <!-- 最新音乐S -->
    <van-cell title="最新音乐" class="title" />
    <!-- <van-cell
      :label="`${
        (item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0]['name']) ||
        '未知歌手'
      }--${item.name}`"
      :title="item.name"
      center
      v-for="item in newList"
      :key="item.id"
    >
      <template>
        <van-icon color="#000" name="play" size="28" />
      </template>
    </van-cell> -->
    <SearchList
      v-for="item in newList"
      :key="item.id"
      :name="item.name"
      :author="item.song.artists[0]['name']"
    ></SearchList>
    <!-- 最新音乐E -->
  </div>
</template>

<script>
// 导入请求方法
import { getRecommendListAPI, getNewListAPI } from "@/api";
// 引入表格组件
import SearchList from "@/components/SearchList";
export default {
  name: "NeteaseCloudmusicIndex",
  components: {
    SearchList,
  },

  data() {
    return {
      recommendList: [],
      newList: [],
    };
  },
  created() {
    this.getrecommendList();
    this.getNewList();
  },
  mounted() {},

  methods: {
    async getrecommendList() {
      try {
        const res = await getRecommendListAPI({
          limit: 6,
        });
        this.recommendList = res.data.result;
      } catch (error) {
        console.log("错误原因", error);
      }
    },
    async getNewList() {
      try {
        const res = await getNewListAPI({
          limit: 20,
        });
        this.newList = res.data.result;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }
  .van-grid-item__content {
    padding: 0 5px;
    // .van-item-img {
    // }
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