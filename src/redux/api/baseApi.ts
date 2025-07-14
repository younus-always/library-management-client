import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
      reducerPath: "booksApi",
      baseQuery: fetchBaseQuery({
            baseUrl: `${import.meta.env.VITE_API_URL}/api`
      }),
      tagTypes: ["books", "borrow"],
      endpoints: (builder) => ({
            getBooks: builder.query({
                  query: ({ skip = 10, limit = 10 }) => `/books?limit=${limit}&skip=${skip}`,
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
            addBorrow: builder.mutation({
                  query: (borrowData) => ({
                        url: "/borrow",
                        method: "POST",
                        body: borrowData
                  }),
                  invalidatesTags: ["borrow"]
            }),
            deleteBook: builder.mutation({
                  query: (bookId) => ({
                        url: `/books/${bookId}`,
                        method: "DELETE"
                  }),
                  invalidatesTags: ["books"]
            }),
            updateBook: builder.mutation({
                  query: ({ id, data }) => ({
                        url: `/books/${id}`,
                        method: "PUT",
                        body: data
                  }),
                  invalidatesTags: ["books"]
            })

      })
});

export const { useGetBooksQuery, useGetBorrowsQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation, useAddBorrowMutation } = booksApi;