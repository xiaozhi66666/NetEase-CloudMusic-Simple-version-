<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="searchVal"
      @input="searchFn"
    />
    <!-- 热门搜索 -->
    <template v-if="this.searchVal == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          text-color="#ad0000"
          style="margin: 8px 6px"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in hotList"
          :key="index"
          @click="searchHot(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <!-- 最佳匹配S -->
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name || '未知歌手'}--${item.name}`"
        /> -->
        <SearchList
          v-for="item in searchList"
          :key="item.id"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SearchList>
      </van-list>
    </template>
    <!-- 最佳匹配S -->
  </div>
</template>
<script>
import { getHotListAPI, getSearchListAPI } from "@/api";
// 引入表格组件
import SearchList from "@/components/SearchList";
export default {
  components: {
    SearchList,
  },
  data() {
    return {
      hotList: [],
      searchVal: "",
      searchList: [],
      finished: false,
      loading: false,
      timer: null,
      page: 1,
      limit: 20,
    };
  },
  created() {
    this.getHotList();
  },
  methods: {
    async getHotList() {
      try {
        const res = await getHotListAPI();
        this.hotList = res.data.result.hots;
      } catch (error) {
        console.log(error);
      }
    },
    async searchHot(val) {
      this.page = 1;
      this.finished = false;
      this.searchVal = val;
      this.searchList = await this.getList(this.searchVal);
    },
    async onLoad() {
      this.page++;
      const res = await this.getList(this.searchVal);
      // console.log(res);
      if (res.length == 0) {
        // 如果请求回来的结果没有了就让finished为true表示以全部加载完成
        this.finished = true;
        return;
      }
      console.log(res);
      this.searchList = [...this.searchList, ...res];
      this.loading = false;
    },
    searchFn() {
      // if (this.searchVal.trim().length == 0) {
      //   return;
      // }
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        this.searchList = await this.getList(this.searchVal);
      }, 500);
    },
    async getList(val) {
      try {
        const res = await getSearchListAPI({
          keywords: val,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        return res.data.result.songs || [];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
