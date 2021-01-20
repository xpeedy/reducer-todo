import React, { useReducer, useState } from "react";

const TodoForm = (props) => {
    // const [state, dispatch] = useReducer(reducer,initialState)
    const [value, setValue] = useState({inputValue: ""});

    const handleChanges = (evt) => {
        setValue({inputValue: evt.target.value})
        console.log(evt.target.value)
        console.log(value)
    }
    const Add = (evt) => {
        evt.preventDefault()
        props.handleAddTodo(value.inputValue)
        setValue({inputValue:""})
    }
    const Clear = (evt) => {
        evt.preventDefault()
        props.handleClearCompleted()
    }

    

    return(
        <div>
            <form onSubmit={Add}>
                <label >
                    <input 
                    type="text"
                    onChange={handleChanges}
                    value={value.inputValue}
                    />
                </label>
                <button >add todo</button>
                
            </form><button onClick={Clear}>clear todo</button>
        </div>
    )
}

export default TodoForm;