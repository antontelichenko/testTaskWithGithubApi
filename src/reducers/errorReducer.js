const errorReducer=(state=null, action)=>{
    switch(action.type){
        case 'LOAD_USERS':
        case 'LOAD_SUCCESS':
            return null;
        case 'LOAD_ERROR':
            return action.error;

        default:
            return state;
    }
};

export default errorReducer;