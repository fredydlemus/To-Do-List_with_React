import React from "react";
import { useTodos } from "./useTodos";
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
import {TodosError} from "./TodosError";
import {Modal} from './Modal/modal';
import {TodoForm} from './TodoForm';
import {TodosLoading} from './TodosLoading';
import {EmptyTodos} from "./EmptyTodos";



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
    
  }= useTodos();

  console.log(searchedTodos);
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
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        /> 
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={()=> <TodosError/>}
          onLoading={() => <TodosLoading/>}
          onEmptyTodos={() => <EmptyTodos/>}
          render={todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          )}
        />

      </TodoDay>
      <CommentsButton/>
      {!!openModal &&(
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
    );
}

export default App;
