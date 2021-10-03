import React from "react";

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() =>{
      setTimeout(() => {
       try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
  
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }
  
      setItems(parsedItem);
      setLoading(false);
       }catch(err){
        setError(err);
       }
      }, 9000);
    }, []);
  
    
    
  
    
  
    const saveItems = (newItems) =>{
      try{
        const stringifiedTodos = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedTodos);
      setItems(newItems);
      }catch(err){
        setError(err);
      }
    };
  
    return{
      item,
      saveItems,
      loading,
      error
    };
  
  }

  export {useLocalStorage};