import React from "react";

import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';

function TodoItem(props){

    
    return (
        <li className={`item ${props.completed && 'item--completed'}`}>
            <div className={`item-text-wrapper ${props.completed && 'item-text-wrapper--completed'}`}>
                <p className={`item-text-wrapper__content ${props.completed && 'item-text-wrapper__content--completed'}`}>{props.text}</p>
            </div>
            <div className={`item-buttons-wrapper ${props.completed && 'item-buttons-wrapper--completed'}`}>
                <p className={`item-buttons-wrapper__button-content ${props.completed && 'item-buttons-wrapper__button-content--completed'}`}>Delete</p>
                <AiFillCloseCircle 
                    className={`item-buttons-wrapper__button item-buttons-wrapper__button--delete ${props.completed && 'item-buttons-wrapper__button--deleted'}`}
                    size="30px" 
                    color="gray"
                    onClick={props.onDelete}/>
                    
                 
                <p className={`item-buttons-wrapper__button-content ${props.completed && 'item-buttons-wrapper__button-content--completed'}`}>Complete</p>
                <AiFillCheckCircle 
                    className={`item-buttons-wrapper__button item-buttons-wrapper__button--complete ${props.completed && 'item-buttons-wrapper__button--completed'}`} 
                    size="30px" 
                    color={`${!props.completed? 'gray' : 'green'}`}
                    onClick={props.onComplete}
                    />
                    
            </div>
            
        </li>
    );
}

export {TodoItem};