import books from '@/api/bookData'

export type Books = Book[]
export type Book = typeof books[number]
