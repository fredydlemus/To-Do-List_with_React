import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";

import { TodoDay } from "./TodoDay";

import { TodoHeader } from "./TodoHeader";

import {TodosError} from "./TodosError";
import {Modal} from './Modal/modal';
import {TodoForm} from './TodoForm';
import {TodosLoading} from './TodosLoading';

import {OnEmptySearchResults} from './EmptySearchResults';
import {ChangeAlert} from './ChangeAlert/ChangeAlert';
import CreateNewTodo from "./CreateNewTodo";


function App() {


  const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
    openSearch
    
  }= useTodos();

  console.log(searchedTodos);
  return(
    <React.Fragment>
      <TodoHeader>
        {/* <TodoGreeting user="Fredy" greeting="Good Afternoon "/>
        <LoginButton/> */}
      </TodoHeader>
      {!!openSearch &&(
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />
      )}
      
      <TodoDay 
        date="Tuesday 28-sep-2021"
        loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        /> 
        {<TodoList
          searchText={searchValue}
          totalTodos={totalTodos}
          error={error}
         
          searchedTodos={searchedTodos}
          onError={()=> <TodosError/>}
          onLoading={() => <TodosLoading/>}
          
          onEmptySearchResults={() => <OnEmptySearchResults searchText={searchValue}/>}
          
        >
          {todo =>(
            
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}
            />
          )}
        </TodoList>}
        <CreateNewTodo totalTodos={totalTodos}>
            <CreateTodoButton setOpenModal={setOpenModal}/>

        </CreateNewTodo>

      </TodoDay>
      {/* <CommentsButton/> */}
      {!!openModal &&(
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
    );
}

export default App;
