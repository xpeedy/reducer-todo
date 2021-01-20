import React  from "react";
import Todo from "./todo";


const TodoList = (props) => {

    return(
        <div className="todo-list">
            <h3>Todo List</h3>
            <ul>
            {props.todos.map(todo => {
                return(
                    <Todo todo={todo} key={todo.id} handleCompleted={props.handleCompleted}/>
                    )
            })}
            </ul>
        </div>
    )
}

export default TodoList;