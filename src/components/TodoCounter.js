import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";


function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className='dayCard__counter'>today you has completed {completedTodos} of {totalTodos} ToDo's!!!</h2>
        
    );
}

export { TodoCounter };