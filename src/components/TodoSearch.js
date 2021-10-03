import React from "react";


function TodoSearch({searchValue, setSearchValue }){

    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    

    return(
        <input 
            className='search' 
            placeholder = 'Cebolla'
            value={searchValue}
            onChange={onSearchValueChange}
            />
    );
}

export {TodoSearch};