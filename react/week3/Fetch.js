import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
export function FetchApi() { 
  const [subscribedState, setSubscribedState] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    (async () => {
      const result = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw').then((res) =>
        res.json()
      );
      setSubscribedState(result);
    })();
  }, []);
  const deleteItem = (id) => {
    const remove = [...subscribedState].filter((todo)=> todo.id !== id)
    setSubscribedState(remove)
  }
  const completeTodo = (id) => {
    let updatedTodos = subscribedState.map(todo => {
         if(todo.id === id){
          todo.isComplete = !todo.isComplete;
          }
        return todo
   }) 
     setSubscribedState(updatedTodos)
 };
 const editTodo = (id, text) => {
  let editTodos = subscribedState.map((todo) => {
    if (todo.id === id) {
      todo.text = text;
    }
    return todo;
  });
  setSubscribedState(editTodos);
  setEdit(false);
};
  return (
      <div>
        <TodoList setSubscribedState = {setSubscribedState}></TodoList>
          {subscribedState.map((todo,index) => 
          <ul key = {todo.id}>
     <li key = {todo.id}>{todo.description} | {todo.deadline}
    <input type = "checkbox" className={todo.isComplete ? "complete" : ""} key={todo.id} onClick={() =>completeTodo(todo.id)}></input>
    <button onClick = {() => deleteItem(todo.id)}>Delete</button>
    <button onClick = {() => editTodo(todo.id)}>edit</button>
    </li>
    </ul>
          ) }
      </div>
  )
}