import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import EmailSignupValidation from './EmailSignupValidation';
import EmailSignupForm from './EmailSignupForm';
import EmailSignupLockout from './EmailSignupLockout';
import LoadingAnimation from './LoadingAnimation';
import EmailSignupSuccess from './EmailSignupSuccess';
import EmailSignupError from './EmailSignupError';
import cookies from '../utils/cookies';

class EmailSignup extends Component {
  focusMessage(component, selector) {
    const msgElement = $(`.${selector}`);
    const nudge = Number(component.style.borderRightWidth.replace('px', ''));
    const elementTop = msgElement.offset().top - (nudge || 10);
    const scrollTop = $(window).scrollTop();
    const isMobile = $(window).width() < 768;

    if (isMobile && elementTop < scrollTop) {
      $('html,body').animate({
        scrollTop: elementTop
      });
    }
  }
  componentDidMount() {
    const { submission, age } = this.props;
    const componentNode = ReactDOM.findDOMNode(this);
    const componentChildClass = componentNode && Array.from(componentNode.children).length
      ? Array.from(componentNode.children)[0].className
      : undefined;
    if (submission.success || submission.success === false || age.eligible === false) {
      this.focusMessage(componentNode, componentChildClass);
    }
  }
  render() {
    const { submission, age, data } = this.props;
    const hasLockoutCookie = !!cookies.get('email_lockout');
        
    if (submission.success) {
      return <EmailSignupSuccess />;
    } else if (submission.error) {
      console.log (submission)
      return <EmailSignupError error={submission.error} />;
    } else if (age.eligible === false) {
      return <EmailSignupLockout />;
    } else if (hasLockoutCookie) {
      if (data.isVideo) {
        return <EmailSignupLockout />;
      }
      // regular version just doesn't display if user is locked out
      return null;
    }
    return (
      <div className="email-signup">
        {submission.pending
          ? <div className="email-signup__overlay"><LoadingAnimation /></div>
          : null}
        <div className="email-signup__inner">
          <div className="email-signup__headline">
            <i className="icon icon--large icon--envelope" />
            <span className="email-signup__headline--text">
              {data.headline}
            </span>
          </div>
          <EmailSignupValidation {...this.props} />
          <EmailSignupForm {...this.props} />
        </div>
      </div>
    );
  }
}

EmailSignup.propTypes = {
  submission: React.PropTypes.object,
  data: React.PropTypes.object,
  age: React.PropTypes.object
};

export default EmailSignup;
