import react from "react";


function TodoHeader(props){
    return(
        <header className="header">
            {props.children}
        </header>
    );
}

export {TodoHeader};