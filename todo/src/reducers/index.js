export const initialState = {
    item: "learn about reducer",
    completed: false,
    id: new Date(),
};

const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return({...state, item: action.payload});
        case("COMPLETED"):
            return({...state, completed: action.playload});
        case("CLEAR_COMPLETED"):
            return({...state, id: action.playload});    
        default:
            return(state);
    }
}

export default reducer;