import { useState } from "react"
import { appContainer, board, buttons } from "./App.css.ts"
import { BoardList } from "../src/components/BoardList/BoardList"
import ListsContainer from "./components/ListsContainer/ListsContainer.tsx"
import { useTypedSelector } from "./hooks/redux.ts"


function App() {

  const [activeBoard, setactiveBoardId] = useState('board-0')
  const boards = useTypedSelector(state => state.board)
  const getActiveBoard = boards.boardArray.filter(board => board.boardId === activeBoard) [0];
  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      <BoardList 
          activeBoardId={activeBoard}
          setActiveBoardId={setactiveBoardId}
        />

      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId}/>
      </div>
        
      <div className={buttons}>
        <button>
          이 게시판 삭제하기
        </button>        
      </div>
    </div>
  )
}

export default App
