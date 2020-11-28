import React from "react";
  
  export function TodoItem (props) {
    
    return (
      
        <div>
        <h3> {props.description} : {props.deadline}</h3>
       
        </div>
              
    );
  }
  
