import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../types";

type TSetModalDataAction = {
  boardId: string;
  listId: string;
  task: ITask;
}

// 타입 지정 => interface 사용해도 됨.
type TModalState = {
  boardId: string;
  listId: string;
  // task 타입을 추가로 생성 => types/index.ts
  task: ITask;
}

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "song"
  }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, {payload}: PayloadAction<TSetModalDataAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    }
  }
})

export const { setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;