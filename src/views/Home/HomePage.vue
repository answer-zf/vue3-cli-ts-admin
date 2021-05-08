<template>
  <div class="content">
    <h3>this is HomePage</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBookListInject } from '@/context'

import books from '@/api/bookData'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { setBooks, unReadBooks } = useBookListInject()
    setBooks(books)
    console.log('使用 context Reducer 做状态处理', unReadBooks.value)
  },
})
</script>
