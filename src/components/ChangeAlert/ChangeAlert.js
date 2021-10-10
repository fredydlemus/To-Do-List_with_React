import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize}){
    const {show, toggleShow} = useStorageListener(sincronize);
    if(show){
        return(
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODO's en otra pestaña o ventana del navegador</p>
                    <p>¿Quieres sincronizar tus TODO's?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                >Yess</button>
                </div>
                
                
            </div>
        );
    }else{
        return null
    }
    
}



export{ChangeAlert};