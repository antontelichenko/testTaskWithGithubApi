import {combineReducers} from 'redux';
import users from './users_reducer';
import loading from './loadingReducer';
import error from './errorReducer';
import stats from './statsReducer';

const rootReducer = combineReducers({
     users, loading, error, stats
})

export default rootReducer;