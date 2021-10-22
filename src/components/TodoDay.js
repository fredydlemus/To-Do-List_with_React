import React from "react";

function TodoDay({children, loading, date}){
    

    return(
       
        <section className="dayCard">
            {/* <h3 className="dayCard__dayTitle">{date}</h3> */}
            
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, {loading}))}
                
        </section>
    );

    }
export {TodoDay};