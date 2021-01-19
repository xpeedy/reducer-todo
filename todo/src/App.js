import './App.css';
import Todo from "./components/todo";
import TodoForm from "./components/todoForm"

function App() {
  
  return (
    <div className="App">
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
