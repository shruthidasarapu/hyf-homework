import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import './App.css';
export function FetchApi() { 
  const [subscribedState, setSubscribedState] = useState([]);
  
  useEffect(() => {
    (async () => {
      const result = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw').then((res) =>
        res.json()
      );
      setSubscribedState(result);
    })();
  }, []);
  const deleteTodo = (id) => {
    const remove = [...subscribedState].filter((todo)=> todo.id !== id)
    setSubscribedState(remove)
  }
  const editTodo =(index)=>{
    const list = [...subscribedState];
    list[index].onEdit = !list[index].onEdit;
    setSubscribedState(list)
  }
  const updateTodo = (index,value)=>{
    const list = [...subscribedState];
    list[index].description = value;
    setSubscribedState(list)
  }
  const checkTodo = (index)=>{
    const list = [...subscribedState];
    list[index].onCheck = !list[index].onCheck;
    setSubscribedState(list)
  }
  return (
      <div>
        <TodoList setSubscribedState = {setSubscribedState}></TodoList>
          {subscribedState.map((todo,index) =>
          <div className = "todos">
          {!todo.onEdit ?( <>
          <span key ={index} onChange={()=>updateTodo(index)} /> 
          <span className = {todo.onCheck ? "strikethrough" : "none"}>{todo.description} | {todo.deadline}</span>
          <input key={index} type="checkbox" onChange={()=>checkTodo(index)}/>
          <button onClick={()=>editTodo(index)} >Edit</button>
          </>
           ): (<span className="none">
           <input key ={index} onChange={(e)=>updateTodo(index,e.target.value)} value={todo.description} />
          | {todo.deadline}
          <button key={index} onClick={()=>editTodo(index)}>update</button>
          </span>)} 
          <button onClick = {() => deleteTodo(todo.id)}>Delete</button>
          </div>
          )}
        </div>
         )
         } 
          
          