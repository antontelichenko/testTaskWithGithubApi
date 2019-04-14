import {take, fork, put, call} from 'redux-saga/effects'
import {fetchUsersStats, fetchUsersStars} from '../api/index'
import {loadUsersStats, setUsersStats, setErrorStats} from '../actions/index'

function* handleStatsRequest(url, id){
    try {
        yield put(loadUsersStats(url));
        const response=yield call(fetchUsersStats, url);
        let sum=[];
        for(let i=1; i<30;i++){
            sum.push(yield call(fetchUsersStars, url,i));
        }

        yield put(setUsersStats(id ,response,sum));
    } catch (error) {
        yield put(setErrorStats(url));
    }
}

export default function* watchStatsRequest(){
    while(true){
        const  {users}=yield take('LOAD_SUCCESS');
        for(let i=0; i<users.items.length; i++){
            yield fork(handleStatsRequest, users.items[i].url,  i)
        }
    }
}