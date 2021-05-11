<template>
  <el-card class="outsideCard m-5">
    <z-alert :options="alertOptions" />
    <el-tabs class="contextTabs pt-3">
      <el-tab-pane label="未阅图书">
        <div v-if="unReadBooks.length !== 0">
          <div class="w-8/12 mx-auto">
            <z-book :options="item" v-for="item in unReadBooks" :key="item.id" />
          </div>
        </div>
        <div v-else>
          <el-empty description="图书已全阅读" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已阅图书">
        <div v-if="finishedBooks.length !== 0">
          <div class="w-8/12 mx-auto">
            <z-book :options="item" v-for="item in finishedBooks" :key="item.id" />
          </div>
        </div>
        <div v-else>
          <el-empty description="没有找到已阅图书" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <p>{{ unReadBooks.length }}</p>
    <p>{{ loading }}</p>
  </el-card>
</template>

<script lang="ts">
// 该路由下关联的文件
// @/api/views/cookie/context.ts
// @/hooks/useAysnc.ts
// @/context/
// @/type/views/cookie/index.ts
// @/mock/data/books

// （修改）
// @/App.vue
// @/mock/index.ts
// @/mock/response.ts

import { defineComponent, reactive } from 'vue'

import { AlertOptions } from '@/type/component/zalert'
import ZAlert from '@/component/ZAlert.vue'

import { useBookListInject } from '@/context'

import { books } from '@/api/views/cookie/context'
import { useAsync } from '@/hooks'
import ZBook from '@/component/ZBook.vue'

export default defineComponent({
  components: { ZAlert, ZBook },
  name: 'Context',
  setup() {
    const alertOptions = reactive<AlertOptions>({
      zicon: 'el-icon-star-on',
      zspan: '使用 Context useReducer 理念做的状态管理实验',
    })

    const { setBooks, unReadBooks, finishedBooks } = useBookListInject()
    console.log(finishedBooks)

    const loading = useAsync(async () => {
      const { data } = await books()
      setBooks(data.data)
    })

    return { alertOptions, unReadBooks, loading, finishedBooks }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.contextTabs .el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}

::v-deep(.contextTabs .el-tabs__nav-wrap::after) {
  background-color: transparent;
}
</style>
