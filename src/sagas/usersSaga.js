import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchUsers} from '../api/index'
import {setUsers, setError} from '../actions/index'

function* handleUsersLoad(){
    try {
    const users =yield call(fetchUsers);
    yield put(setUsers(users));
    } catch (error) {
        yield put (setError(error.toString()));
    }
}

//watcher saga
export default function* watchUsersLoad(){
    yield takeEvery('LOAD_USERS', handleUsersLoad);
}
