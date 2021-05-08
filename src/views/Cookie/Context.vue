<template>
  <h1>this is a Client list</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookListInject } from '@/context'

import books from '@/api/bookData'

export default defineComponent({
  name: 'Client',
  setup() {
    const { setBooks, unReadBooks } = useBookListInject()
    setBooks(books)
    console.log('使用 context Reducer 做状态处理', unReadBooks.value)
  },
})
</script>
