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
import {TodoContext} from "./TodoContext/TodoContext";
import {Modal} from './Modal/modal';
import {TodoForm} from './TodoForm';

import {TodosLoading} from './TodosLoading';


function AppUI(){

  const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  }= React.useContext(TodoContext);

    return(
        <React.Fragment>
      <TodoHeader>
        <TodoGreeting user="Fredy" greeting="Good Afternoon "/>
        <LoginButton/>
      </TodoHeader>
      
      <TodoSearch/>
      <TodoDay date="Tuesday 28-sep-2021">
        <TodoCounter/> 
        <TodoList>
          {error && <p>Asustate</p>}
          {loading && [<TodosLoading key={0}/>, <TodosLoading key={1}/>, <TodosLoading key={2}/>] }
          {(!loading && !searchedTodos.length) && <p className="FirstMessage">Crea tu primer ToDo</p>}
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
      {!!openModal &&(
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
    );
}

export {AppUI};