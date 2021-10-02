import React from "react";

function TodoItem(props){
    return (
        <li className={`item ${props.completed && 'item--completed'}`}>
            <div className={`item-text-wrapper ${props.completed && 'item-text-wrapper--completed'}`}>
                <p className={`item-text-wrapper__content ${props.completed && 'item-text-wrapper__content--completed'}`}>{props.text}</p>
            </div>
            <div className={`item-buttons-wrapper ${props.completed && 'item-buttons-wrapper--completed'}`}>
                <p className={`item-buttons-wrapper__button-content ${props.completed && 'item-buttons-wrapper__button-content--completed'}`}>Delete</p>
                <span className={`item-buttons-wrapper__button ${props.completed && 'item-buttons-wrapper__button--deleted'}`}>X</span>
                <p className={`item-buttons-wrapper__button-content ${props.completed && 'item-buttons-wrapper__button-content--completed'}`}>Complete</p>
                <span className={`item-buttons-wrapper__button ${props.completed && 'item-buttons-wrapper__button--completed'}`}>ᄼ</span>
            </div>
            
        </li>
    );
}

export {TodoItem};