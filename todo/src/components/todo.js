import React, { useReducer,useState } from "react";

import reducer, { initialState } from "../reducers";


// console.log(initialState);
// let currentState = reducer(initialState, {type: "ADD_TODO", payload: "exercise"})
// console.log(currentState)
// currentState = reducer(currentState, {type: "COMPLETED", payload: true})
// console.log(currentState)
// currentState = reducer(currentState, {type: "CLEAR_COMPLETED", payload: ""})
// console.log(currentState)
// currentState = reducer(currentState, {type: "ADD_TODO", payload: "homework"})
// console.log(currentState)

const Todo = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    // const [items, setItem] = useState(initialState)
    console.log(state)
    
    return(
        <div  className={`task${state.completed ? "completed" : ""}`}>
            {state.map(item => {
                return <p key={item.id}>{item.item}</p>
            })}
            
        </div>
    )
}

export default Todo;