import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = composeWithDevTools({});

export default (reducer, preloadedState) => createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, promiseMiddleware()))
  );
