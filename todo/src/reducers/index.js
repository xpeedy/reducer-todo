export const initialState = [
  {
    item: "learn about reducer",
    completed: false,
    id: new Date(),
  },
  {
    item: "tarea",
    completed: false,
    id: new Date(),
  }
]

const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return({...state,
                 item: action.payload,
                 completed: false,
                 id: new Date(),
            });
        case("COMPLETED"):
            return({...state, completed: action.payload});
        case("CLEAR_COMPLETED"):
            return({...state, id: action.playload});    
        default:
            return(state);
    }
}

export default reducer;