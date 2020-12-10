import React, { useState, useEffect } from 'react';
export function WatchCount() {
let [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
   },[count]);

return (
    <h1>You have used {count} seconds on this website </h1> 
)
}