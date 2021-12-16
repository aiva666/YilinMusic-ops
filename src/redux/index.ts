/*
 * @Author: Aiva
 * @Date: 2021-12-13 15:54:32
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 16:04:34
 * @Description:
 * @FilePath: \yilin-music-ops\src\redux\index.ts
 */
import {
    configureStore,
    createAction,
    createReducer,
    PayloadAction,
    createAsyncThunk,
} from "@reduxjs/toolkit";

// 初始State
const initState: TStore = {};

// 创建Reducer
const reducer = createReducer(initState, {});

export const Store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
});
