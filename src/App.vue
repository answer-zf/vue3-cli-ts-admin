<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useProvide } from '@/context'

export default defineComponent({
  name: 'App',
  setup() {
    // 使用 context Reducer 理念管理数据
    // 导入 provide
    useProvide()
  },
})
</script>
