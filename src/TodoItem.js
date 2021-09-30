import React from "react";

function TodoItem(props){
    return (
        <li className={`dayCard-list-item ${props.completed && 'Item_complete'}`}>
            <div className={`dayCard-list-item-textWrapper ${props.completed && 'Content_complete'}`}>
                <p className={`dayCard-list-item-textWrapper__text ${props.completed && 'TodoItem_complete'}`}>{props.text}</p>
            </div>
            <div className={`dayCard-list-item-buttonsWrapper ${props.completed && 'Item_buttons_complete'}`}>
                <p>Delete</p>
                <span className='dayCard-list-item-buttonsWrapper__button'>X</span>
                <p>Complete</p>
                <span className={`dayCard-list-item-buttonsWrapper__button ${props.completed && 'Icon_complete'}`}>ᄼ</span>
            </div>
            
        </li>
    );
}

export {TodoItem};