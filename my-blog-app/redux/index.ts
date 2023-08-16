import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogs/blogsSlice";
import {blogsApi } from './features/blogs/blogsApi';

export const store = configureStore({
    reducer:{
        blogs: blogsReducer,
        [blogsApi.reducerPath]: blogsApi.reducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(blogsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;