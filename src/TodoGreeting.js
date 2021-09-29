import React from "react";
import './TodoGreeting.css';


function TodoGreeting(props){
    return(
        <h1 className='Greeting'>{props.greeting}{props.user}!</h1>
    );
}

export {TodoGreeting};