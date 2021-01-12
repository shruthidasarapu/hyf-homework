import './App.css';
import React,{useState} from "react";
let todos = [
    {
      id: 1,
      description: "Get out of bed",
      isDone: false
    },
    {
      id: 2,
      description: "Brush teeth",
      isDone: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      isDone: false
    },
    {
      id: 4,
      description: "random text",
      isDone: false
    },
   ];
  export function TodoDisplay(){
    const [state, setState] = useState([]);
    
    const addTodo = () => {
    const randomNumber =Math.floor((Math.random() * todos.length) );
       setState(prev => {
        return [...prev, {
        id : todos[todos.length -1]?.id + 1 || 1,
        description :todos[randomNumber].description ,
        isDone : false
      }
      
    ]})
      
     }
  const deleteTodo = (index) => {
     setState(todos.splice(index,1))
    }
  const checkTodo=(index) => {
   setState(todos[index].isDone = !todos[index].isDone)
  }
  return (
      <div>
        <button onClick ={addTodo} >Add Todo</button>
        <ul>
        {state.map((item, index) => (<li key = {index}> <span className = {item.isDone ? "strikethrough" : "none"} >{item.description}</span>
       { <input key = {index}  type = "checkbox" onChange = {() => checkTodo(index)} ></input>}
        {<button onClick = { () => deleteTodo(index)}>Delete</button>}
         </li>)
        )}
        </ul> 
         </div>
  )
  }