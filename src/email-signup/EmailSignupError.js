import React, { Component } from 'react';
import { spring, TransitionMotion } from 'react-motion';

class EmailSignupError extends Component {
  render() {
    const { error } = this.props;
    return (
      <TransitionMotion
        defaultStyles={[{ key: '0', style: { opacity: 0 }, data: error }]}
        styles={[{ key: '0', style: { opacity: spring(1, { stiffness: 50 }) }, data: error }]}
      >
        {interpolatedStyles => (
          <div className="email-signup">
            <div
              className="email-signup__headline--error"
              key="0"
              style={interpolatedStyles[0].style}
            >
              <i className="icon icon--large icon--close" />
              <span>{interpolatedStyles[0].data}</span>
            </div>
          </div>
        )}
      </TransitionMotion>
    );
  }
}

EmailSignupError.propTypes = {
  error: React.PropTypes.string
};

export default EmailSignupError;
