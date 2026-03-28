import { useReducer } from "react";
import { boardReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
  logger: loggerReducer,
  board: boardReducer,
  modal: modalReducer,
  user: useReducer
}

export default reducer;