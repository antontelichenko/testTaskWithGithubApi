import {all} from 'redux-saga/effects'

import usersSaga from './usersSaga';
import statsSaga from './statsSaga';
// export default usersSaga;

export default function* rootSaga(){
    yield all([
        usersSaga(),
        statsSaga(),
    ]);
}