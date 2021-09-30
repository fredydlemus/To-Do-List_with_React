import React from "react";

function TodoDay(props){
    return(
       
        <section className="dayCard">
            <h3 className="dayCard__dayTitle">{props.date}</h3>
            
            {props.children}
        </section>
    );
}

export {TodoDay};