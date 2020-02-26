import React from 'react';
import { spring, TransitionMotion } from 'react-motion';

const EmailSignupLockout = () => (
  <TransitionMotion
    defaultStyles={[{ key: '0', style: { opacity: 0 } }]}
    styles={[{ key: '0', style: { opacity: spring(1, { stiffness: 50 }) } }]}
  >
    {interpolatedStyles => (
      <div className="email-signup">
        <div
          className="email-signup__headline--lockout"
          key="0"
          style={interpolatedStyles[0].style}
        >
          <i className="icon icon--large icon--close" />
          <span>Sorry, but you are ineligible for registering.</span>
        </div>
      </div>
    )}
  </TransitionMotion>
);

export default EmailSignupLockout;
