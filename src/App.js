import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoGreeting } from "./TodoGreeting";
import { TodoDay } from "./TodoDay";
import { LoginButton } from "./LoginButton";
import { TodoMenu } from "./TodoMenu";
import { CommentsButton } from "./CommentsButton";
// import './App.css';
const todos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el nuevo curso', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'Soy una pruebita :D', completed: false},
  

];

function App() {
  return (
    <React.Fragment>
      <TodoMenu>
        <TodoGreeting user="Fredy" greeting="Good Afternoon "/>
        <LoginButton/>
      </TodoMenu>
      
      <TodoSearch/>
      <TodoDay date="Tuesday 28-sep-2021">
        <TodoCounter/> 
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} />
          ))} 
        </TodoList>
      </TodoDay>
      <CommentsButton/>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
