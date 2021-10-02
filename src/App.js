import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoGreeting } from "./TodoGreeting";
import { TodoDay } from "./TodoDay";
import { LoginButton } from "./LoginButton";
import { TodoHeader } from "./TodoHeader";
import { CommentsButton } from "./CommentsButton";
// import './App.css';
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el nuevo curso', completed: false},
  { text: 'Llorar con la llorona', completed: true},
  { text: 'Soy una pruebita :D', completed: false},
  

];

function App() {

  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoGreeting user="Fredy" greeting="Good Afternoon "/>
        <LoginButton/>
      </TodoHeader>
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoDay date="Tuesday 28-sep-2021">
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        /> 
        <TodoList>
          {searchedTodos.map(todo => (
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
