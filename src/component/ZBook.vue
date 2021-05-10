<template>
  <el-container class="zContainer">
    <el-aside class="zImg">
      <el-image
        style="width: 140px; height: 180px"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="cover"
      ></el-image>
    </el-aside>
    <el-main class="zArticle">
      <h3>{{ options.title }}</h3>
      <p>{{ options.author }}</p>
      <div>{{ options.synopsis }}</div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Object,
      require: true,
      default: function() {
        return {}
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/common.scss';
.zContainer {
  padding: 4px;
  border: 1px solid #e4e7ed;
  border-radius: 2px;
  margin-bottom: 8px;
}
.zImg {
  width: 140px !important;
  height: 180px;
  border-radius: 2px;
  overflow: hidden;
  opacity: 0.6;
}
.zArticle {
  height: 180px;
  h3 {
    text-align: center;
    font-size: 18px;
    color: $blue;
  }
  p {
    text-align: center;
    font-size: 12px;
    margin: 6px 0 10px;
    color: $black-light;
  }
  div {
    font-size: 14px;
    color: $black-normal;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
