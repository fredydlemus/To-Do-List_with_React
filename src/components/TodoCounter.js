import React from "react";



function TodoCounter({totalTodos, completedTodos, loading}){

    
    return (
        <h2 className={`dayCard__counter ${!!loading && "dayCard__counter--loading" }`}>today you have completed {completedTodos} of {totalTodos} ToDo's!!!</h2>
        
    );
}

export { TodoCounter };