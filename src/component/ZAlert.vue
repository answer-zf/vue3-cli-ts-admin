<template>
  <el-alert type="success" :closable="false" style="margin:15px 0 10px;">
    <template #title>
      <div class="title">
        <i :class="options.zicon"></i>
        <span style="padding-left:6px;">
          {{ options.zspan }}
        </span>
      </div>
    </template>
  </el-alert>
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
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/common.scss';

.title {
  font-size: 14px;
  padding: 3px 0;
  font-weight: 600;
  i {
    font-size: 18px;
  }
  span {
    color: $black-normal;
  }
}
</style>
