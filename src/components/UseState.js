import React, { useState } from 'react';

//the let [] .... inside of the count is NOT working inside of a conditional!

// 1 for testing purposes, use the following:
// _________________________________________

//state can be any name e.g. state or count -> name of the state, can be passed to children as props, as usual
//setCount is a function, use State(initialState) -> initialState is 0 in this case

// const Counter = () => {
//     let [count, setCount] = useState(0)

//     function increase() {
//         setCount(count + 1)
//     }

//     function decrease() {
//         setCount(count - 1)
//     }

//     return (
//         <div>
//             <h1>New counter with React hooks {count}</h1>
//             <button onClick={increase} >+</button>
//             <button onClick={increase} >-</button>
//         </div>
//     )
// }

// export default Counter;



// 2 this is an even shorter syntax:
// _________________________________

const Counter = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h1>New counter with React hooks {count}</h1>
            <button onClick={() => setCount(count + 1)} >+</button>
            <button onClick={() => setCount(count - 1)} >-</button>
            <div style={{ height: 3, backgroundColor: "orange" }}></div>
        </div>
    )
}

export default Counter;
