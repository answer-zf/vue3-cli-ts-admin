<template>
  <el-container class="p-1 border border-gray-200 rounded-sm mt-1">
    <el-aside class="h-44 rounded-sm flex overflow-hidden zAside">
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover"></el-image>
    </el-aside>
    <el-main class="zMain">
      <h3 class="text-center text-xl text-blue-700 font-bold">{{ options.title }}</h3>
      <p class="text-center text-xs mt-2 mb-2 text-gray-400">{{ options.author }}</p>
      <div class="text-sm text-gray-500 zText">{{ options.synopsis }}</div>
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

.zAside {
  width: 9rem !important;
}

.zMain {
  padding: 0.5rem 0.5rem 0.5rem !important;

  .zText {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 5;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-indent: 1rem;
  }
}
</style>
