import React from "react";
  
  import {TodoItem} from './todoItem';
export function TodoList(props)  {
      
    return (
        <ul>
            {
              props.todos.map(todo => {
                return <TodoItem description= {todo.description} deadline= {todo.deadline}  />;
              })
            }
            
        </ul>
    );
  }
  