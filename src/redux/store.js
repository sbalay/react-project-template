import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-js';
import thunk from 'redux-thunk';

import { reducer as auth } from './authHandlers';

const reducers = combineReducers({
  auth
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

// in dev mode, we'll create the store through Reactotron
const createAppropriateStore = process.env.NODE_ENV === 'development' ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, composeEnhancers(...enhancers));

export default store;
