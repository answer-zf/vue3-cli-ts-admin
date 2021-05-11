<template>
  <el-card class="outsideCard m-5">
    <!-- 提示框 -->
    <div class="mt-3 mb-2">
      <z-alert :options="alertOptions" />
    </div>

    <!-- 命令行介绍 -->
    <div class="zBlock">
      <div class="zBlockItem" v-for="(item, index) in zBlock" :key="index">
        <p class="zTitle">
          {{ item.title }}<span class="text-blue-600">{{ item.subTitle }}</span>
        </p>
        <el-card :body-style="{ padding: '15px' }" class="zCard" v-if="item.content.length === 1">
          {{ item.content[0] }}
        </el-card>
        <el-card :body-style="{ padding: '15px' }" class="zCard" v-else>
          <span v-for="(s, i) in item.content" :key="i">
            {{ s }}
            <span class="text-blue-600" v-if="i + 1 < item.content.length">/ </span>
          </span>
        </el-card>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { AlertOptions } from '@/type/component/zalert'
import ZAlert from '@/component/ZAlert.vue'

interface ZBlock {
  title: string
  subTitle: string
  content: string[]
}

export default defineComponent({
  name: 'HomePage',
  components: {
    ZAlert,
  },
  setup() {
    const alertOptions = reactive<AlertOptions>({
      zicon: 'el-icon-s-opportunity',
      zspan: '使用 cli 脚手架，搭建的 vue3 框架。',
    })

    const zBlock = ref<ZBlock[]>([
      {
        title: '运行 开发环境 - ',
        subTitle: '本地mock',
        content: ['npm start', 'npm run dev-local'],
      },
      {
        title: '运行 开发环境 - ',
        subTitle: '连接后端接口',
        content: ['npm run dev-remote'],
      },
      {
        title: '运行 生产环境 - ',
        subTitle: '项目打包',
        content: ['npm run build'],
      },
    ])

    return { zBlock, alertOptions }
  },
})
</script>

<style lang="scss">
.zBlock {
  @apply divide-y divide-gray-900 divide-opacity-40 divide-dashed -mt-2;

  .zBlockItem {
    @apply pt-5 pb-4 mt-3;
  }

  .zTitle {
    @apply mb-5 text-black text-sm font-semibold;
  }

  .zCard {
    @apply text-sm text-current;
  }
}
</style>
