import React, { useState, useEffect } from 'react';

const NewLife = () => {

    let [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <h1>I am the new lifecycle {count} </h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <div style={{ height: 3, backgroundColor: "orange" }}></div>
        </div>
    )
}

export default NewLife;