import React from "react";



function TodoCounter({totalTodos, completedTodos}){

    
    return (
        <h2 className='dayCard__counter'>today you has completed {completedTodos} of {totalTodos} ToDo's!!!</h2>
        
    );
}

export { TodoCounter };