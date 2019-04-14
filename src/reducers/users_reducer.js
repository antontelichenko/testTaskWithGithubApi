const usersReducer = (state=[], action)=> {

    switch(action.type){

        case'LOAD_SUCCESS':
            return[...state, action.users]
        default:
            return state;
    }
}
export default usersReducer;