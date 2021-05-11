// type
import { Book, Books } from '@/type/views/cookie'
import { computed, inject, provide, ref, Ref } from 'vue'

// context 类型
type BookContext = {
  books: Ref<Books>
  unReadBooks: Ref<Books>
  finishedBooks: Ref<Books>
  setBooks: (value: Books) => void
  hasReadBook: (value: Books) => void
  addBookToFinished: (book: Book) => void
  removeBookToFinished: (book: Book) => void
}

// 唯一键
const BookSymbol = Symbol('booksIndex')

export const useBookListProvide = () => {
  // 全部图书
  const books = ref<Books>([])
  const setBooks = (value: Books) => (books.value = value)

  // 已阅图书
  const finishedBooks = ref<Books>([])

  // 未阅图书
  const unReadBooks = computed(() => {
    return books.value.filter(book => !finishedBooks.value.find(({ id }) => id === book.id))
  })

  // 未阅图书添加至已阅
  const addBookToFinished = (book: Book) => {
    if (!finishedBooks.value.find(({ id }) => id === book.id)) {
      finishedBooks.value.push(book)
    }
  }

  // 将已阅图书做移除
  const removeBookToFinished = (book: Book) => {
    const removeBookIndex = finishedBooks.value.findIndex(({ id }) => id === book.id)
    if (removeBookIndex !== -1) {
      finishedBooks.value.splice(removeBookIndex, 1)
    }
  }

  // 图书是否已阅读
  const hasReadBook = (book: Book) => finishedBooks.value.includes(book)

  provide(BookSymbol, {
    books,
    unReadBooks,
    finishedBooks,
    setBooks,
    hasReadBook,
    addBookToFinished,
    removeBookToFinished,
  })
}

export const useBookListInject = () => {
  const bookContext = inject<BookContext>(BookSymbol)
  if (!bookContext) {
    throw Error('useBookListInject must be used after useBookListProvide')
  }
  return bookContext
}
