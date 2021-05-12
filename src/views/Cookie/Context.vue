<template>
  <el-card class="outsideCard m-5">
    <z-alert :options="alertOptions" />
    <el-tabs class="contextTabs pt-3">
      <el-tab-pane label="未阅图书">
        <div v-if="unReadBooks.length !== 0">
          <div class="w-8/12 mx-auto" v-loading="loading">
            <z-book
              :options="item"
              v-for="item in unReadBooks"
              :key="item.id"
              status="add"
              @handleClick="handleClick"
            />
          </div>
        </div>
        <div v-else>
          <el-empty description="图书已全阅读" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已阅图书">
        <div v-if="finishedBooks.length !== 0">
          <div class="w-8/12 mx-auto">
            <z-book
              :options="item"
              v-for="item in finishedBooks"
              :key="item.id"
              status="remove"
              @handleClick="handleClick"
            />
          </div>
        </div>
        <div v-else>
          <el-empty description="没有找到已阅图书" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <p>{{ unReadBooks.length }}</p>
  </el-card>
</template>

<script lang="ts">
// 该路由下关联的文件
// @/api/views/cookie/context.ts
// @/hooks/useAysnc.ts
// @/context/
// @/type/views/cookie/index.ts
// @/mock/data/books
// @/component/ZBook.vue

// （修改）
// @/App.vue
// @/mock/index.ts
// @/mock/response.ts

import { defineComponent, reactive } from 'vue'

// 提示框组件
import { AlertOptions } from '@/type/component/zalert'
import ZAlert from '@/component/ZAlert.vue'

// api
import { getBooks } from '@/api/views/cookie/context'
// 单项 图书信心组件
import ZBook from '@/component/ZBook.vue'

// 状态管理 hook
import { useBookListInject } from '@/context'
// 异步封装 hook
import { useAsync } from '@/hooks'

export default defineComponent({
  components: { ZAlert, ZBook },
  name: 'Context',
  setup() {
    const alertOptions = reactive<AlertOptions>({
      zicon: 'el-icon-star-on',
      zspan: '使用 Context useReducer 理念做的状态管理实验',
    })

    const { setBooks, unReadBooks, finishedBooks, addBookToFinished, removeBookToFinished } = useBookListInject()
    console.log(finishedBooks)

    // 初始化数据
    const loading = useAsync(async () => {
      const { data } = await getBooks()
      setBooks(data.data)
    })

    // 点击按钮触发事件
    const handleClick = (id: string, status: string, event: MSInputMethodContext) => {
      // * 解决 按钮点击后状态不消失的bug
      let target = event.target as HTMLElement
      if (target.nodeName == 'SPAN') {
        target = event.target.parentNode as HTMLElement
      }
      target.blur()

      if (status && status === 'add') {
        addBookToFinished(id)
      } else if (status && status === 'remove') {
        removeBookToFinished(id)
      }
    }

    return { alertOptions, unReadBooks, loading, finishedBooks, handleClick }
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
