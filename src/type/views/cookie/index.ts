// import { books } from '@/mock/data/books'

export type Books = Book[]
// export type Book = typeof books[number]
export interface Book {
  title: string
  author: string
  coverImageUrl: string
  id: string
  pageCount: number
  publisher: string
  synopsis: string
}
