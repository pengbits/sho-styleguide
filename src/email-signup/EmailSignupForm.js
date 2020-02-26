import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { ageValidation } from './redux/age';
import { age } from './redux/age';

class EmailSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setMonth() {
    this.setState({ month: this.birthMonth.value });
  }
  setYear() {
    this.setState({ year: this.birthYear.value });
  }
  populateMonths() {
    let monthOptions = [];
    for (let i = 0; i < 12; i++) {
      monthOptions.push(<option key={i + 1} value={i + 1}>{i + 1}</option>);
    }
    return monthOptions;
  }
  populateDays() {
    let selectedMonth;
    let selectedYear;
    const dayOptions = [];
    if (this.state.month) {
      selectedMonth = Number(this.state.month) - 1; // moment month goes 0-11
    } else {
      selectedMonth = 0;
    }
    if (this.state.year) {
      selectedYear = this.state.year;
    } else {
      selectedYear = 2012; // default leap year
    }
    const daysInMonth = moment().month(selectedMonth).year(selectedYear).daysInMonth();
    for (let i = 0; i < daysInMonth; i++) {
      dayOptions.push(<option key={i + 1} value={i + 1}>{i + 1}</option>);
    }
    return dayOptions;
  }
  populateYears() {
    const yearOptions = [];
    for (let i = moment().year(); i > 1900; i--) {
      yearOptions.push(<option key={i} value={i}>{i}</option>);
    }
    return yearOptions;
  }
  isError(...validationTypes) {
    const errors = this.props.validation.filter(check => check.error);
    for (const validationType of validationTypes) {
      // check if any matching validation type is in errors
      if (errors.some(check => check.type === validationType)) {
        return true;
      }
    }
  }
  pad(n) {
    if (n < 10) {
      return Number('0') + n;
    }
    return n;
  }
  validateForm() {
    return new Promise((resolve, reject) => {
      const {
        emailValidation,
        monthValidation,
        dayValidation,
        yearValidation,
        tosValidation 
      } = this.props;

      emailValidation(this.email.value);
      monthValidation(this.birthMonth.value);
      dayValidation(this.birthDay.value);
      yearValidation(this.birthYear.value);
      tosValidation(this.tos.checked);
      resolve();
    });
  } 
  submitForm(e) {
    e.preventDefault();
    this.validateForm().then(() => {
      const { validation, ageValidation, formSubmit, trackEvent, data } = this.props;
      const birthdate = `${this.pad(this.birthMonth.value)}/${this.pad(this.birthDay.value)}/${this.pad(this.birthYear.value)}`;
      const errors = validation.filter(check => check.error);
      const errorTypes = errors.map(error => error.type);
      trackEvent('emailSubmit', data.trackingContext);
      let formDataStore = {
        birthdate: birthdate, 
        pubId:this.pubId.value,  
        email:this.email.value, 
        host: data.host,
        isVideo: data.isVideo, 
        videoName: data.videoName
      };
      if (errors.length === 0) {
        ageValidation(birthdate) 
       // removing agevalidation from DispatchToProps was not allowing the form submit action to be completed and not letting me call the agevalidator. For some reason this works now. It wasn't working before. I hope it stays this way.
      }

      if (errors.length === 0 && this.props.age.eligible === true) {
        formSubmit(formDataStore);
      } else if (errors.length > 0) {
        trackEvent('emailSignupError', data.trackingContext, errorTypes);
      } else if (this.props.age.eligible === false) {
        errorTypes.push('invalid age');
        trackEvent('emailSignupError', data.trackingContext, errorTypes);
      }
    });
  }
  render() {
    const { submitting, data } = this.props;
    return (
      <form name="email-signup-form">
        <div className="email-signup__form-fields">
          <div className="email-signup__email-input">
            <p
              className={classNames('email-signup__label', {
                'email-signup__error--label': this.isError('empty email', 'invalid email')
              })}
            >
              email
            </p>
            <input
              autoComplete="off"
              className={classNames('input-box', 'input-box-email', {
                'email-signup__error--form': this.isError('empty email', 'invalid email')
              })}
              name="email"
              placeholder="name@example.com"
              type="text"
              defaultValue=""
              ref={node => this.email = node}
            />
          </div>
          <div className="email-signup__dob-select">
            <p
              className={classNames('email-signup__label', {
                'email-signup__error--label': this.isError('empty month', 'empty day', 'empty year')
              })}
            >
              date of birth
            </p>
            <select
              className={classNames('dob-select', 'select-month', {
                'email-signup__error--form': this.isError('empty month')
              })}
              name="birthdate_month"
              ref={node => this.birthMonth = node}
              onChange={this.setMonth.bind(this)}
            >
              <option hidden>MM</option>
              {this.populateMonths()}
            </select>
            <select
              className={classNames('dob-select', 'select-day', {
                'email-signup__error--form': this.isError('empty day')
              })}
              name="birthdate_day"
              ref={node => this.birthDay = node}
            >
              <option hidden>DD</option>
              {this.populateDays()}
            </select>
            <select
              className={classNames('dob-select', 'select-year', {
                'email-signup__error--form': this.isError('empty year')
              })}
              name="birthdate_year"
              ref={node => this.birthYear = node}
              onChange={this.setYear.bind(this)}
            >
              <option hidden>YYYY</option>
              {this.populateYears()}
            </select>
          </div>
          <div className="email-signup__tos-input">
            <input
              className={classNames('check-box', {
                'email-signup__error--form': this.isError('empty terms and conditions')
              })}
              name="accepts_terms"
              type="checkbox"
              ref={node => this.tos = node}
            />
            <span>
              I have read and agree to the {' '}
              <a href="/about/terms">Terms of Use</a>
              ,{' '}
              <a href="/about/privacy">Privacy Policy</a>
              ,{' '}and{' '}
              <a href="/about/video-services">Video Services Policy</a>
              . I agree to receive updates, alerts and promotions from Showtime.
            </span>
          </div>
        </div>
        <input name="pubId" ref={node => this.pubId = node} type="hidden" value={data.pubId} />
        <button
          className="email-signup__submit-btn"
          onClick={this.submitForm.bind(this)}
          ref={node => this.submitButton = node}
          disabled={submitting}
        >
          {data.cta}
        </button>
      </form>
    );
  }
}

EmailSignupForm.propTypes = {
  validation: React.PropTypes.array,
  emailValidation: React.PropTypes.func,
  monthValidation: React.PropTypes.func,
  dayValidation: React.PropTypes.func,
  yearValidation: React.PropTypes.func,
  tosValidation: React.PropTypes.func,
  ageValidation: React.PropTypes.func,
  formSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  trackEvent: React.PropTypes.func,
  data: React.PropTypes.object
};

export default EmailSignupForm;
 