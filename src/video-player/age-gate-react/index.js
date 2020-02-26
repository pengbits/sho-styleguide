import React from 'react';
import ReactDOM from 'react-dom';
import AgeGateComponent from './AgeGateComponent';

export const factory = (el, age) => {
  return ReactDOM.render(
      <AgeGateComponent el={el} age={age} />,
      el
  )
}

AgeGateComponent.factory = factory;
export default AgeGateComponent
