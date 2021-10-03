import React from "react";

function CreateTodoButton(props){

    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button 
        className='buttonApp buttonApp--create'
        onClick={onClickButton}
        >+</button>
    );
}

export {CreateTodoButton};