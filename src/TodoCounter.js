import React from "react";


function TodoCounter({ total, completed}){

    
    return (
        <h2 className='dayCard__counter'>today you has completed {completed} of {total} ToDo's!!!</h2>
        
    );
}

export { TodoCounter };