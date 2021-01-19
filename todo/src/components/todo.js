import React, { useReducer,useState } from "react";

import reducer, { initialState } from "../reducers";


console.log(initialState);
let currentState = reducer(initialState, {type: "ADD_TODO", payload: "exercise"})
console.log(currentState)
currentState = reducer(currentState, {type: "COMPLETED", payload: true})
console.log(currentState)
currentState = reducer(currentState, {type: "CLEAR_COMPLETED", payload: ""})
console.log(currentState)

console.log(currentState.completed)
const Todo = () => {
    // const [state, dispatch] = useReducer(initialState)
    const [items, setItem] = useState(initialState)
    const [complete, setComplete] = useState(false)

    // console.log(items.item)
    return(
        <div>
            {items.item}
            
        </div>
    )
}

export default Todo;