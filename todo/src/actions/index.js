export const ADD_TODO = "ADD_TODO"
export const COMPLETED = "COMPLETED"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

export const setTodo = (todo) => {
    return( {type: ADD_TODO, payload: todo} )
}

export const setComplete = (todoCompleted) => {
    return( {type: COMPLETED, payload: todoCompleted} )
}

export const setClear = () => {
    return( {type: CLEAR_COMPLETED, payload: ""} )
}