import { createSlice } from "@reduxjs/toolkit";
import { type ILogItem } from "../../types/index";

type loggerState = {
  logArray: ILogItem[]
}

const initialState: loggerState = {
  logArray: []
}

const loggerSlice = createSlice({
  name: "name",
  initialState,
  reducers: {

  }
})

export const loggerReducer = loggerSlice.reducer;