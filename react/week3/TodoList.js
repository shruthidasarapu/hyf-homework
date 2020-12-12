import React, {useState} from 'react'

export function TodoList(props){
    const [startDate, setStartDate] = useState();
    const[item, setItem] = useState();

  console.log(item);
  function addTodo(){
    props.setSubscribedState((prev) => {
      return [...prev,{
        description:item, 
        deadline:startDate,
        onEdit: false,
        onCheck: false
      }]
    })
  }

return (
    <div>
        <ul>
   
      <label>Todo description</label>
      <input type = "text" name= "newItem" value = {item} onChange= {(e) => setItem(e.target.value)}></input> <br></br>
       <label>deadline</label>
      <input type="date" value ={startDate} onChange= {(e) => setStartDate(e.target.value)} ></input><br></br>
      <button onClick = {addTodo}>add todo</button>
      </ul>
      </div>
)
}