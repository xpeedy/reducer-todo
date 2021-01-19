import React, { useReducer, useState } from "react";
import reducer, { initialState } from "../reducers";

import { setTodo, setComplete, setClear } from "../actions"


const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    // const [value, setValue] = useState({inputValue: ""});

    const handleChanges = (evt) => {
        dispatch(setTodo(evt.target.value))
        console.log(evt.target.value)
    }

    // const Add = (evt) => {
    //     evt.preventDefault();
    //     const handleAdd = (Value) => {
    //         setState({
    //             state: [...state,{
    //                 item: value,
    //                 completed:false,
    //                 id: new Date()
    //             }]
    //         })
    //     }
    //     handleAdd(state.inputValue);
    //     setState("")
    // }

    return(
        <div>
            <form>
                <label >Todos List
                    <br/>
                    <input 
                    type="text"
                    onChange={handleChanges}
                    value={state.value}
                    />
                </label>
                <button >add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;