import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
// import './App.css';
const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el nuevo curso', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'Soy una pruebita :D', completed: false},
  

];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/> 
      <TodoSearch/>
      
      <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
      ))} 
      </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
