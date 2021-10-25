import React from 'react'

const CreateNewTodo = (props) =>{
    return(
        <section className="CreateNewTodo">

            {(!props.loading && !props.totalTodos) && <p>Create your first ToDo: </p>}
            {(!props.loading && !!props.totalTodos) && <p>Create a new ToDo: </p>} 
            
            {props.children}
        </section>
    );
}

export default CreateNewTodo;