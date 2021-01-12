import './App.css';
import React, {useState} from 'react';
import {TodoDisplay } from './TodoDisplay';
import {WatchCount} from './Counter.js'
import {Fibonacci} from './Fibonacci.js'
export function App() {
return (
  <div className="App">
     <WatchCount></WatchCount> 
    <TodoDisplay></TodoDisplay >
    <Fibonacci></Fibonacci>
  </div>
);
}
export default App;