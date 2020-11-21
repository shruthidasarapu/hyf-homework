
import './App.css';

import {Counter} from './fibonacci';

import {TodoList } from './todoList';


const todos = [
  {
    description:"Get out of bed",
    deadline :"Wed Sep 13 2017"
  },
  {
    description:"Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
      description:"Eat breakfast",
      deadline: "Fri Sep 15 2017"
  }
];


export function App() {
return (
  <div className="App">
    <TodoList  todos={todos}></TodoList >
    <Counter ></Counter>
  </div>
);
}
export default App;
