import React from "react";

function TodoList(props){
    return(
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );

}

export {TodoList};