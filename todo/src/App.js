import './App.css';
import React, { useReducer, useState } from "react";
import TodoForm from "./components/todoForm"
import TodoList from './components/todoList';
import reducer,{ initialState } from './reducers/index';
import { addTodo, setCompleted, clearCompleted } from './actions';




function App() {
  const [ state, dispatch] = useReducer(reducer,initialState)
  
  const handleAddTodo = (title) => {
    dispatch(addTodo(title))
  }

  const handleCompleted = (id) => {
    dispatch(setCompleted(id))
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }
  console.log(state)
  return (
    <div className="App">
      <TodoForm
      handleAddTodo={handleAddTodo}
      handleClearCompleted={handleClearCompleted}
      />
      <TodoList 
      todos={state.todoList}
      handleCompleted={handleCompleted}
      
      />
    </div>
  );
}

export default App;
