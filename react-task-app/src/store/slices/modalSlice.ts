import { createSlice } from '@reduxjs/toolkit';
import type { ITask } from "../../types";

type TModeState = {
  boardId: string;
  listId: string;
  task: ITask;
}

const initialState: TModeState = {
  boardId : "board-0",
  listId : "list-0",
  task : {
      taskId : "task-0",
      taskName : "task 0",
      taskDescription : "task description",
      taskOwner : "Song"
  }
}

const modalSlice = createSlice({
  name : 'modal',
  initialState,
  reducers: {

  }
})

export const modalReducer = modalSlice.reducer;