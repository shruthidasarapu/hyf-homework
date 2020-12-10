import './App.css';
import React, { useState, useEffect } from 'react';
import {WatchCount} from './Counter.js'
 import {FetchApi} from './Fetch.js'
 function App() {
 
  return (
    <div className = "App">
      <h1> TODO LIST</h1>
      <WatchCount></WatchCount>
      <FetchApi></FetchApi>
     </div>
  );
}

export default App;