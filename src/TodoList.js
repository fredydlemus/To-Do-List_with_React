import React from "react";

function TodoList(props){
    return(
        
            <ul className="dayCard-list">
                {props.children}
            </ul>
        
    );

}

export {TodoList};