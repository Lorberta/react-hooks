import React, { useReducer } from 'react';

//syntax very close to the Redux syntax
//here initialState is 0 again -> useReducer(reducer, initialState)
//dispatch -> is a function, with an object inside with a 'type' key that has a value which is whatever we want, here it is "Dax"
//reduce -> check out useReducer on React Docs, not StackOverflow, because it is alpha and not enough valid answers available yet
//what is the action.type -> create it in the div
//what we write in 'dispatch' will become the action.type

const Reducer = () => {
    const reduce = (state, action) => {
        if (action.type === "Dax") {
            return state + 1
        }
        else if (action.type === "Max") {
            return state - 1
        }
        else if (action.type === "*") {
            return state * 3
        }
    }

    let [state, dispatch] = useReducer(reduce, 0)

    return (
        <div>
            <h1>I am the reducer {state}</h1>
            <button onClick={() => dispatch({ type: "Dax" })} >+</button>
            <button onClick={() => dispatch({ type: "Max" })} >-</button>
            <button onClick={() => dispatch({ type: "*" })} >*3</button>
        </div>
    )

}

export default Reducer;