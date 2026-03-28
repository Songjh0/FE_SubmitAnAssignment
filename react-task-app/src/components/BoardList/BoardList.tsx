import React, { useRef, useState, type FC } from 'react';
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiLogIn, FiPlusCircle } from "react-icons/fi";
import { addSection, title, container, addButton, boardItem } from "./BoardList.css";
import { GoSignOut } from "react-icons/go";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { removeUser, setUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

export const BoardList:FC<TBoardListProps> = ({
  _activeBoardId,
  _setActiveBoardId
}) => {
  const dispatch = useTypedDispatch();
  const { boardArray } = useTypedSelector(state => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const { isAuth } = useAuth();

  const handleLogin = () => {
    singInWithPopup(auth, provider).then(userCredential => {
      console.log(userCrendential);
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
          })
        )
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      dispatch(
        removeUser()
      )
    })
    .catch((error)=>{
      console.error(error);
    })
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

        { isAuth 
          ?
            <GoSignOut className={addButton} onClick={handleSignOut}/>
          :
          <FiLogIn className={addButton} onClick={handleLogin}/>
        }

      </div>
    </div>
  )
}