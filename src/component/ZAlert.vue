<template>
  <el-alert type="success" :closable="false" class="-ml-2">
    <template #title>
      <div class="font-bold px-1 flex items-center">
        <i :class="options.zicon" class="text-lg"></i>
        <span class="pl-1 text-gray-500 text-sm">
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
::v-deep(.el-alert__content) {
  padding: 0;
}
</style>
