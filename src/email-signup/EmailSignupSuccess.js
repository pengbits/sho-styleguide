import React from 'react';
import { spring, TransitionMotion } from 'react-motion';

const EmailSignupSuccess = () => (
  <TransitionMotion
    defaultStyles={[{ key: '0', style: { opacity: 0 } }]}
    styles={[{ key: '0', style: { opacity: spring(1, { stiffness: 50 }) } }]}
  >
    {interpolatedStyles => (
      <div className="email-signup">
        <div
          className="email-signup__headline--success"
          key="0"
          style={interpolatedStyles[0].style}
        >
          <i className="icon icon--large icon--check-mark" />
          <span>Thank you for signing up for Showtime email updates.</span>
        </div>
      </div>
    )}
  </TransitionMotion>
);

export default EmailSignupSuccess;
