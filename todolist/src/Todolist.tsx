import { useState } from "react";
import { Button } from 'react-bootstrap';
import TodoModal from "./TodoModal";

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
};

const Todolist : React.FC = () => {
  const title : string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>([
    {id : 1, text : '공부하기', isChecked : false},
    {id : 2, text : '잠자기', isChecked : false},
    {id : 3, text : '미팅하기', isChecked : false}])

    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId : number) => {
      setTodos((prevItems)=>
        prevItems.map((item)=>
          item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
        )
      )
    }

    const addTodo = () => {
      // trim() = 빈값인지 검사하는 내장함수
      // ...todos = 원본은 유지하되, 새로운 메모리를 생성해서 새로운 배열을 생성
      if(newTodo.trim() !== ''){
        setTodos([...todos, {id:Date.now(), text: newTodo, isChecked:false}])
        setNewTodo('');
      }
    }

    const removeTodo = (id : number) => {
      //todos라는 데이터에서 filter라는 함수를 호출하면서 첫번째(todo)를 던져줌
      // filter 역할 : 전체 배열에서 특정 조건을 만족하는 요소만 필터링 해서 새로운 배열로 리턴해줌
      setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleTodoClick = (todo : Todo) => {
      setShowDetail(true);
      setSelectedTodo(null);
    }

    const handleCloseDetail = () => {
      setShowDetail(false);
    }

  return(
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          <input type="text"
            placeholder="할 일 입력"
            style={{marginRight : '10px',writingMode : 'horizontal-tb'
            }}
            onChange={(e)=> setNewTodo(e.target.value)}
          />
            <Button variant="warning" onClick={addTodo}>추가</Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {
              todos.map((todo, index)=>(
                <li key={todo.id}>
                  <input type="checkbox" 
                  onChange={()=>{
                    handleCheckedChange(todo.id);
                  }}></input>
                  <span onClick={() => handleTodoClick(todo)}>
                    {
                      todo.isChecked ? 
                      <del>{todo.text}</del>
                      : <span>{todo.text}</span>
                    }
                  </span>
                  <button
                    onClick = {()=> removeTodo(todo.id)} 
                    className="delbutton"
                  >삭제</button>
                </li>
              ))
            }
        </ul>
        </div>     
      </div>
      <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
    </div>
  )
}

export default Todolist;