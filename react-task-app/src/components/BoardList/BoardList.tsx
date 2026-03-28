import React, { useRef, useState, type FC } from 'react';
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import { addSection, title, container, addButton, boardItem } from "./BoardList.css";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

export const BoardList:FC<TBoardListProps> = ({
  // _activeBoardId,
  // _setActiveBoardId
}) => {

  const { boardArray } = useTypedSelector(state => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  return (
    <div className={container}>
      <div className={title}>
        게시판: 
      </div>

      {boardArray.map((board, index) => (
        <div 
          key={board.boardId}
          className={boardItem}
          >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ?
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen}/>
          : 
          <FiPlusCircle className={addButton} onClick={handleClick}/>
        }
      </div>
    </div>
  )
}