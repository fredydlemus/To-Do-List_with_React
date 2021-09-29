import React from "react";

function TodoItem(props){
    return (
        <li className={`Item ${props.completed && 'Item_complete'}`}>
            <div className={`Content ${props.completed && 'Content_complete'}`}>
                <p className={`${props.completed && 'TodoItem_complete'}`}>{props.text}</p>
            </div>
            <div className={`Item_buttons ${props.completed && 'Item_buttons_complete'}`}>
                <p>Delete</p>
                <span className='Item_button'>X</span>
                <p>Complete</p>
                <span className={`Item_button ${props.completed && 'Icon_complete'}`}>ᄼ</span>
            </div>
            
        </li>
    );
}

export {TodoItem};