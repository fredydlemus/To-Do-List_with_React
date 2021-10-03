import React from "react";



function TodoGreeting(props){
    return(
        <h1 className='header__text-principal'>{props.greeting}{props.user}!</h1>
    );
}

export {TodoGreeting};