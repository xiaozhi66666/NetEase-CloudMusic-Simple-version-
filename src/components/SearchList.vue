<template>
  <div>
    <van-cell :label="author" :title="name" center :id="id">
      <template>
        <van-icon color="#000" name="play" size="28" />
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

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>