export type Book = {
      _id: string,
      title: string,
      author: string,
      genre: string,
      description: string,
      isbn: string,
      copies: number,
      available: boolean,
      createdAt: string,
      updatedAt: string
}

export type BorrowBook = {
      book: { title: string; isbn: string }[];
      totalQuantity: number;
}