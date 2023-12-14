import React from 'react';
import {useState} from "react";

function countInitial() {
    console.log("function returned ") //it will run every time the state changes
    return 4

}

export default () => {
    const [count, setCount] = useState(() => countInitial())
// export default () => {
//     const [count, setCount] = useState(() => {
//         console.log("Function returned ") //it will run only the very first component renders, one time
//         return 4
//     })
//     export default () => {
//         const [count, setCount] = useState(() => countInitial()) //it will run only the very first component renders, one time
//     function decrementCount() {
        return setCount((prevState) => prevState - 1);
    }

    function incrementCount() {
        return setCount((prevState) => prevState + 1);
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

// function App() {
//     return (
//         <h1>
//             test case
//         </h1>
//     )
// }
// export default App