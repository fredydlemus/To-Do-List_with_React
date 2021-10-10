import React from "react";

function OnEmptySearchResults(props){
    return(
        <p className="empty-search">No hay resultados para {props.searchText}</p>
    );
}

export {OnEmptySearchResults};