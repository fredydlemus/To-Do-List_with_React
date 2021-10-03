import React from "react";

function TodosLoading(){
    return(
        <div className="LoadingTodo-container">
            <div className="LoadingTodo-text-wrapper">
                <p className="LoadingTodo-text-wrapper__content">Loading ToDo's...</p>
            </div>
            <div className="LoadingTodo-buttons-wrapper">
                {/* <p className="LoadingTodo-buttons-wrapper__button-text">...</p>
                <span className="LoadingTodo-buttons-wrapper__button"></span>
                <p className="LoadingTodo-buttons-wrapper__button-text">...</p>
                <span className="LoadingTodo-buttons-wrapper__button"></span> */}
            </div>
            
        </div>
    );
}

export{TodosLoading};