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

const Todo = (props) => {
    const handleClick = () => {
        props.handleCompleted(props.todo.id)
    }
    
    return(
        <li className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={handleClick}
        >{props.todo.title}</li>
    )
}

export default Todo;