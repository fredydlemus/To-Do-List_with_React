import React from 'react'

const CreateNewTodo = (props) =>{
    return(
        <section className="CreateNewTodo">
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {props.children}
        </section>
    );
}

export default CreateNewTodo;