import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStoreConfig from './reduxStoreConfig';
import SampleReactComponent from './SampleReactComponentContainer';
import SampleReactComponentReducer from './SampleReactComponentReducer';


export const factory = (el) => {
  let store = reduxStoreConfig(SampleReactComponentReducer)
  
  return ReactDOM.render(
    <Provider store={store}>
      <SampleReactComponent />
    </Provider>,
    el
  )
}

SampleReactComponent.factory = factory;
export default SampleReactComponent
