import { type TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// const dispatch = useDispatch();

// // ts가 추론을 못 하면 -> 개발자가 타입을 지정
// const logger = useSelector(state => state.logger);

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
const useTypedDispatch = () => useDispatch<AppDispatch>();

const logger = useSelector((state: RootState) => state.logger);

// interface Obj<T> {
//   name: T;
// }

// interface State {
//   state: {
//     data: string,
//     loading: boolean
//   }
// }

// const obj: Obj<State> = {
//   name : {
//     state: {
//       data: 'abcd',
//       loading: false
//     }
//   }
// }