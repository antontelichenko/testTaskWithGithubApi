import React from 'react';
import ReactDOM from 'react-dom';

import{ Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
// import promiseMiddleware from 'redux-promise';
// import thunk from 'redux-thunk';
import HomeContainer from './containers/home_container';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducer, compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <HomeContainer/>
    </Provider>

    , document.getElementById('root'));

