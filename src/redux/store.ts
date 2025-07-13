import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./api/baseApi";

export const store = configureStore({
      reducer: {
            [booksApi.reducerPath]: booksApi.reducer
      },
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(booksApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch