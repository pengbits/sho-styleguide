import React from 'react';
import { mount } from 'enzyme';
import EmailSignup from './EmailSignupWrapper';
import EmailSignupValidation from './EmailSignupValidation';
import EmailSignupForm from './EmailSignupForm';
import EmailSignupLockout from './EmailSignupLockout';
import LoadingAnimation from './LoadingAnimation';

let mountedWrapper;
// use initialState with dummy data props so we don't have to bother with redux
const initialState = {
  validation: [
    { type: 'empty email', error: false, message: 'Please enter an email' },
    { type: 'invalid email', error: false, message: 'Please enter a valid email' },
    { type: 'empty month', error: false, message: 'Please enter a valid month' },
    { type: 'empty day', error: false, message: 'Please enter a valid day' },
    { type: 'empty year', error: false, message: 'Please enter a valid year' },
    {
      type: 'empty terms and conditions',
      error: false,
      message: 'Please accept the Terms and Conditions'
    }
  ],
  values: {},
  age: { eligible: null, dob: null },
  submission: {
    pending: null,
    success: null
  },
  data: { isVideo: true, trackingContext: 'test', pubId: '000' }
};

describe('<EmailSignup />', () => {

  beforeAll(() => {
    mountedWrapper = mount(<EmailSignup {...initialState} />);
  });

  test('renders without crashing', () => {
    expect(mountedWrapper).toHaveLength(1);
  });

  test('renders form if not signed up or locked out', () => {
    const form = mountedWrapper.find(EmailSignupForm);
    expect(form).toHaveLength(1);
  });

  test('renders nothing if signed up cookie is present', () => {
    document.cookie = 'email_signup=true';
    const wrapper = mount(<EmailSignup {...initialState} />);
    const emailSignup = wrapper.find('.email-signup');
    expect(emailSignup).toHaveLength(0);
    document.cookie = 'email_signup=; expires=0'; // reset the cookie for other tests
  });

  test('renders lockout component if cookie is present', () => {
    document.cookie = 'email_lockout=01/01/2017';
    const wrapper = mount(<EmailSignup {...initialState} />);
    const lockoutComponent = wrapper.find(EmailSignupLockout);
    expect(lockoutComponent).toHaveLength(1);
    document.cookie = 'email_lockout=; expires=0'; // reset the cookie for other tests
  });

  test('renders loading animation if submitting:true', () => {
    const submittingProps = { ...initialState, submission: { pending: true } };
    const wrapper = mount(<EmailSignup {...submittingProps} />);
    const loading = wrapper.find(LoadingAnimation);
    expect(loading).toHaveLength(1);
  });
});

describe('<EmailSignupValidation /> && <EmailSignupForm />', () => {
  let validationComponent;
  const validationErrors = [
    { type: 'empty email', error: false, message: 'Please enter an email' },
    { type: 'invalid email', error: true, message: 'Please enter a valid email' },
    { type: 'empty month', error: true, message: 'Please enter a valid month' },
    { type: 'empty day', error: true, message: 'Please enter a valid day' },
    { type: 'empty year', error: true, message: 'Please enter a valid year' },
    {
      type: 'empty terms and conditions',
      error: true,
      message: 'Please accept the Terms and Conditions'
    }
  ];
  const validationProps = { ...initialState, validation: validationErrors };

  beforeAll(() => {
    mountedWrapper = mount(<EmailSignup {...validationProps} style={{top: '100px'}} />);
    validationComponent = mountedWrapper.find(EmailSignupValidation);
    mountedWrapper.setState({
      validation: validationErrors
    });
  });

  test('EmailSignupValidation renders errors if validation type error === true', () => {
    // test state contains 6 validation types with 5 errors === true
    const errors = validationComponent.find('.email-signup__validation--error');
    expect(errors).toHaveLength(5);
  });

  test(
    'EmailSignupForm renders error classnames on matching input types when validation errors === true',
    () => {
      // mount render form with errors prop
      // because it's not re-rendering after receiving new props from wrapper setState?
      const form = mount(<EmailSignupForm {...validationProps} />);
      // validationErrors has empty month with error === true
      // so error classnames should render on month select
      const monthSelect = form.find('.select-month');
      expect(monthSelect.hasClass('email-signup__error--form')).toBe(true);
    }
  );
});
