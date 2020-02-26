import React, { Component } from 'react';
import $ from 'jquery';
import EmailSignup from './EmailSignup';
import cookies from '../utils/cookies';

export const userAlreadySignedUp = (() => !!cookies.get('generic')); // this flag should ideally make its way into application state

const EmailSignupWrapper = WrappedComponent => class EmailSignupWrapped extends Component {
  componentWillUpdate(nextProps) {
    const { submission, age, emailHash } = nextProps;
    if (age.eligible === false) {
      cookies.set('email_lockout', age.dob, 1);
    }
  }  
 
  componentDidMount(){
    const { data, emailHash,initEmailHash } = this.props;
    if (emailHash && data.isVideo) { 
      initEmailHash(data.videoName, emailHash); 
    }
  }

  render() {
    const { submission, data, videoSuccess } = this.props;
    const hasLockoutCookie = !!cookies.get('email_lockout');
    if (data.isVideo && submission.success) {
      // this is not idiomatic react but there doesn't seem to be another way to unmount DOM root,
      // and that has to happen for css to work on mobile
      $('.js-react-email-signup').remove();
      // scrolling back up is also necessary on mobile to compensate for the disappearing, taller div
      $('html,body').animate({ scrollTop: 0 });
      // trigger video play
      videoSuccess();
      // don't render anything
      return null;
    } else if (data.isVideo && !hasLockoutCookie && userAlreadySignedUp()) {
      $('.js-react-email-signup').remove();
      // slight delay for brightcove because sometimes it doesn't work
      setTimeout(() => videoSuccess(), 250);
      // don't render anything
      return null;
    } else if (data.isVideo) {
      return (
        <div className="video-player__email-signup">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
    return <WrappedComponent {...this.props} />;
  }
};

export default EmailSignupWrapper(EmailSignup);