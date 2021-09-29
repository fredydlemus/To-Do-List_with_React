import react from "react";


function TodoMenu(props){
    return(
        <div className="menu">
            {props.children}
        </div>
    );
}

export {TodoMenu};