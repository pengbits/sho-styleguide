// redux + store
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import cookies from '../utils/cookies';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//imports:app
import SubmissionMiddleWare from './middleware/submission-middleware'

// component source
import EmailSignup, {userAlreadySignedUp} from './EmailSignupContainer';
import rootReducer, { initialState } from './redux/reducer';
// set up store
const k = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = window[k] ? window[k]({ 'name':'Email Signup Module' }) : compose;  

const getStore = (reducer,preloadedState={}) => createStore(reducer, preloadedState,
  composeEnhancers(applyMiddleware(SubmissionMiddleWare, thunk, promiseMiddleware())) 
);  
 
// begin component
export const factory = (el) => {
  // grab those data attributes if they're there or use default
  const pubId = el.getAttribute('data-pub-id') || '46169';
  const trackingContext = el.getAttribute('data-tracking-context') || 'email signup:';
  const headline = el.getAttribute('data-headline') || 'Get Showtime Email Updates';
  const cta = el.getAttribute('data-cta') || 'Sign Up';
  const host = el.getAttribute('data-host') || '';
  const isVideo = Boolean(el.getAttribute('data-is-video') === 'true');
  const videoName = el.getAttribute('data-video-title') || '';
  const emailHash = cookies.get('generic'); 
  const signupErrorList = [];
  // data attributes 'reducer' function to be combined with other reducers
  const data = () => ({ pubId, trackingContext, headline, cta, host, isVideo, videoName, emailHash, signupErrorList });
  const reducer = combineReducers({...rootReducer, data})
  const preloadedState = {...initialState, ...data, emailHash}
  const store = getStore(reducer, preloadedState)
  return ReactDOM.render(
    <Provider store={store}>
      <EmailSignup />
    </Provider>,
    el
  );
};

EmailSignup.factory = factory;
EmailSignup.userAlreadySignedUp = userAlreadySignedUp;
export default EmailSignup;
