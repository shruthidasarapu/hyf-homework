import React, { useState } from "react";
​ export function Fibonacci() {
​    const [fibonacciList, setFibonacciList] = useState([0,1]);
    const [fiboDisplay, setFiboDisplay] = useState(false);
    if (fibonacciList.length < 10) {
        setFibonacciList(prev => {
            const lastNumber = prev[prev.length - 1];
            const secondLastNumber = prev[prev.length - 2];
            const nextFibonacci = lastNumber + secondLastNumber;
            return [...prev, nextFibonacci];
        });
    }
    return (
        <div>
            <button onClick={() => setFiboDisplay(true)}>Increment</button>
            {fiboDisplay && fibonacciList.map(counter => <div>{counter}</div>)}
        </div>
    );  
    }