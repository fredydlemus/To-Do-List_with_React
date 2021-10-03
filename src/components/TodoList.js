import React from "react";

function TodoList(props){
    return(
        
            <ul className="dayCard__list">
                {props.children}
            </ul>
        
    );

}

export {TodoList};