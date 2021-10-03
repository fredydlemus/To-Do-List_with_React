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

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return(
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
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))} 
        </TodoList>
      </TodoDay>
      <CommentsButton/>
      <CreateTodoButton/>
      
    </React.Fragment>
    );
}

export {AppUI};