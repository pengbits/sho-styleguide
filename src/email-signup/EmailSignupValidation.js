import React, { Component } from 'react';
import { spring, TransitionMotion } from 'react-motion';

export default class EmailSignupValidation extends Component {
  mapStyleToData(style, data) {
    return data.map((d, i) => ({
      // our errors get passed into TransitionMotion's optional `data` key to be used as text
      data: d,
      // TransitionMotion required `key` prop expects a string instead of a number
      key: i.toString(),
      // attach our style object
      style
    }));
  }
  render() {
    const errors = this.props.validation.filter(check => check.error);
    if (errors.length > 0) {
      return (
        <TransitionMotion
          defaultStyles={this.mapStyleToData({ opacity: 0 }, errors)}
          styles={this.mapStyleToData(
            { opacity: spring(1, { stiffness: 50 }) },
            errors
          )}
        >
          {interpolatedStyles => ( 
            // TransitionMotion interpolates `defaultStyles` & `styles` props
            // interpolatedStyles is an array of objects
            // using style from first object in array for container, so it fades in too
            <div className="email-signup__validation" style={interpolatedStyles[0].style}>
              {interpolatedStyles.map(({ key, style, data }) => (
                <span className="email-signup__validation--error" key={key} style={style}>
                  {data.message}
                </span>
              ))}
            </div>
          )}
        </TransitionMotion>
      );
    }
    return null;
  }
}

EmailSignupValidation.propTypes = {
  validation: React.PropTypes.array
};
