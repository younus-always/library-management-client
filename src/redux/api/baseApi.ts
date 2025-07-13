import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
      reducerPath: "booksApi",
      baseQuery: fetchBaseQuery({
            baseUrl: `${import.meta.env.VITE_API_URL}/api`
      }),
      tagTypes: ["books", "borrow"],
      endpoints: (builder) => ({
            getBooks: builder.query({
                  query: () => "/books",
                  providesTags: ["books"]
            }),
            getBorrows: builder.query({
                  query: () => "/borrow",
                  providesTags: ["borrow"]
            }),
            addBook: builder.mutation({
                  query: (bookData) => ({
                        url: "/books",
                        method: "POST",
                        body: bookData
                  }),
                  invalidatesTags: ["books"]
            }),
            deleteBook: builder.mutation({
                  query: (bookId) => ({
                        url: `/books/${bookId}`,
                        method: "DELETE",
                        body: bookId
                  }),
                  invalidatesTags: ["books"]
            })

      })
});

export const { useGetBooksQuery, useGetBorrowsQuery, useAddBookMutation, useDeleteBookMutation } = booksApi;