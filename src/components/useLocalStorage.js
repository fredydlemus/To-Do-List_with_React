import React from "react";

function useLocalStorage(itemName, initialValue){
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
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
      setSincronizedItem(true);
       }catch(err){
        setError(err);
       }
      }, 3000);
    }, [sincronizedItem]);
  
    
    
  
    
  
    const saveItems = (newItems) =>{
      try{
        
      const stringifiedTodos = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedTodos);
      setItems(newItems);
      }catch(err){
        setError(err);
      }
    };

    const sincronizeItem = () =>{
      setLoading(true);
      setSincronizedItem(false);
    }
  
    return{
      item,
      saveItems,
      loading,
      error,
      sincronizeItem
    };
  
  }

  export {useLocalStorage};