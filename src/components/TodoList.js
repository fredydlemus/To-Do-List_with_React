import React from "react";

function TodoList(props){
    
    const renderFunc = props.children || props.render;


    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}
            
            
            <ul className="dayCard__list">
                
                {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
            </ul>
        </section>
        
    );

}

export {TodoList};