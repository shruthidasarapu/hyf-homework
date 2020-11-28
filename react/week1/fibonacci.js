import React, { useState } from 'react';
export function Counter () {
    
    const [counterState, setCounterState] = useState([0, 1]);
  
    // ... some code here
    const increment = () => {
        const currentNumber = counterState.length-1;
        const nextNumber = counterState[currentNumber] + counterState[currentNumber-1];
        
        setCounterState([...counterState , nextNumber]);
      };
  
    return (
        <div>
            { counterState.map(counter => <div>{counter}</div>) }
            <button onClick={increment}>Increment</button>
        </div>
    );  
}