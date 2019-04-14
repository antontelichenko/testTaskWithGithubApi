const statsReducer = (state=[], action)=> {

    switch(action.type){

        case'LOAD_SUCCESS_STATS':
            return{...state, [action.id]:{isLoading:false,info:action.response,error:false, stars:action.stars}}
        default:
            return state;
    }
}
export default statsReducer;