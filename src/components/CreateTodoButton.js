import React from "react";

function CreateTodoButton(props){

    const onClickButton = (msg) =>{
        alert(msg);
    }

    return(
        <button 
        className='buttonApp buttonApp--create'
        onClick={() => onClickButton('Modal')}
        >+</button>
    );
}

export {CreateTodoButton};