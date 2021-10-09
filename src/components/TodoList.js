import React from "react";

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
            {props.searchedTodos.map(props.render)}
            <ul className="dayCard__list">
                {props.children}
            </ul>
        </section>
        
    );

}

export {TodoList};