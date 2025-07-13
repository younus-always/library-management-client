import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
      reducerPath: "books",
      baseQuery: fetchBaseQuery({
            baseUrl: `${import.meta.env.VITE_API_URL}/api`
      }),
      endpoints: (build) => ({
            getBooks: build.query({
                  query: () => "/books"
            }),
            getBorrows: build.query({
                  query: () => "/borrow"
            })
      })
});

export const { useGetBooksQuery,useGetBorrowsQuery } = booksApi;