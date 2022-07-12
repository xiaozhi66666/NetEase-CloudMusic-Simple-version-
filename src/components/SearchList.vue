<template>
  <div>
    <van-cell :label="author + '``' + name" :title="name" center :key="id">
      <template>
        <van-icon color="#000" name="play" size="28" @click="goPlay" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "NeteaseCloudmusicSearchList",
  props: {
    name: String,
    author: String,
    id: Number,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    goPlay() {
      this.$router.push({
        path: "/play",
        query: { id: this.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>