import React from "react";


function TodoHeader(props){
    return(
        <header className="header">
            <p>TodoList</p>
            {props.children}
        </header>
    );
}

export {TodoHeader};