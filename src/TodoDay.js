import React from "react";

function TodoDay(props){
    return(
       
        <div className="TodoDay">
            <h3>{props.date}</h3>
            
            {props.children}
        </div>
    );
}

export {TodoDay};