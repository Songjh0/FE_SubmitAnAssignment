import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

// reducer 넣어서 store 객체 생성
const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
store.getState()
export type AppDispatch = typeof store.dispatch;

export default store;