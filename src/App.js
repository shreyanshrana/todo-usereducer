import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

const reducerFunction = (todos, action) => {
  switch(action.type) {
    case 'ADD-NEW':
      return [...todos, addNewTodo(action.payload)];
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.payload);
    default:
      return todos;
  }
}

const addNewTodo = (todo) => {
  return {
    name : todo,
    completed:  false,
    id : Date.now()
  }
}
function App() {

  
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(reducerFunction, []);

  console.log(todos);
  return (
    <div className="App">
      <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}}/>
      <button onClick={() => {
        dispatch({type: 'ADD-NEW', payload: newTodo});
        setNewTodo("");
        }}>Add</button>
      {
        todos.map(todo => {
          return <Todo todo = {todo} key = {todo.id} dispatch ={dispatch}/>
        })
      }
    </div>
  );
}

export default App;
