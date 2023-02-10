import { combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducers from './root-reducers';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();
// const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware];
const reducer = combineReducers({
  ...rootReducers
})

const store = configureStore(
  {
    reducer,
    middleware: [...middlewares],
  }
);
sagaMiddleware.run(rootSaga);
export { store };
