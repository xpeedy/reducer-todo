export const initialState = {
  todoList:[
    {
      title: "learn about reducer",
      completed: false,
      id: 0,
    },
    {
      title: "tarea",
      completed: false,
      id: 1,
    }
  ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            const newTodo = {
              title: action.payload,
              completed: false,
              id: state.todoList.length,
            }
            return({...state, todoList: [...state.todoList, newTodo]
            });
        case("TOGGLE_COMPLETED"):
            return({...state, todoList:state.todoList.map(todo => {
              if(todo.id === action.payload){
                return({...todo, completed: !todo.completed})
              }
              else {
                return todo;
              }
            })});
        case("CLEAR_COMPLETED"):
            return({...state, todoList: state.todoList.filter(todo => {
              return !todo.completed
            })});    
        default:
            return(state);
    }
}

export default reducer;