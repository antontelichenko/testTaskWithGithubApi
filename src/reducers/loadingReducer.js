const loadingReducer=(state=false, action)=>{
    switch(action.type){
        case 'LOAD_USERS':
            return true;
        case 'LOAD_SUCCESS':
            return false;
        case 'LOAD_ERROR':
            return false;

        default:
            return state;
    }
};

export default loadingReducer;