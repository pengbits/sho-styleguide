// action types
export const EMAIL_VALID = 'VALIDATION/EMAIL_VALID';
export const EMAIL_EMPTY = 'VALIDATION/EMAIL_EMPTY';
export const EMAIL_ENTERED = 'VALIDATION/EMAIL_ENTERED';
export const EMAIL_INVALID = 'VALIDATION/EMAIL_INVALID';
export const MONTH_VALID = 'VALIDATION/MONTH_VALID';
export const MONTH_INVALID = 'VALIDATION/MONTH_INVALID';
export const DAY_VALID = 'VALIDATION/DAY_VALID';
export const DAY_INVALID = 'VALIDATION/DAY_INVALID';
export const YEAR_VALID = 'VALIDATION/YEAR_VALID';
export const YEAR_INVALID = 'VALIDATION/YEAR_INVALID';
export const TOS_VALID = 'VALIDATION/TOS_VALID';
export const TOS_INVALID = 'VALIDATION/TOS_INVALID';

// action creators
  const emailValid = email => ({
    type: EMAIL_VALID,
    value: email
  });
  
  const emailEmpty = email => ({
    type: EMAIL_EMPTY,
    value: email
  });
  
  const emailEntered = email => ({
    type: EMAIL_ENTERED,
    value: email
  });
  
  const emailInvalid = email => ({
    type: EMAIL_INVALID,
    value: email
  });
  
  const monthValid = month => ({
    type: MONTH_VALID,
    value: month
  });
  
  const monthInvalid = month => ({
    type: MONTH_INVALID,
    value: month
  });
    
  const dayValid = day => ({
    type: DAY_VALID,
    value: day
  });
  
  const dayInvalid = day => ({
    type: DAY_INVALID,
    value: day
  });

  
  const yearValid = year => ({
    type: YEAR_VALID,
    value: year
  });
  
  const yearInvalid = year => ({
    type: YEAR_INVALID,
    value: year
  });
  
  const tosValid = tos => ({
    type: TOS_VALID,
    value: tos
  });
  
  const tosInvalid = tos => ({
    type: TOS_INVALID,
    value: tos
  });
  

 
//validation export helper functions used  

export const emailValidation = email => (dispatch) => {
  const pattern = /\S+@\S+\.\S+/;
  if (email === '') {
    dispatch(emailEmpty(email));
  } else {
    dispatch(emailEntered(email));
    if (pattern.test(email)) {
      dispatch(emailValid(email));
    } else {
      dispatch(emailInvalid(email));
    }
  }
};

export const monthValidation = month => (dispatch) => {
  if (month !== 'MM') {
    dispatch(monthValid(month));
  } else {
    dispatch(monthInvalid(month));
  }
};

export const yearValidation = year => (dispatch) => {
  if (year !== 'YYYY') {
    dispatch(yearValid(year));
  } else {
    dispatch(yearInvalid(year));
  }
};

export const dayValidation = day => (dispatch) => {
  if (day !== 'DD') {
    dispatch(dayValid(day));
  } else {
    dispatch(dayInvalid(day));
  }
};

export const tosValidation = checked => (dispatch) => {
  if (checked) {
    dispatch(tosValid(checked));
  } else {
    dispatch(tosInvalid(checked));
  }
};

//validation reducer 

const initialValidationState = {
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
  ]
};

const validate = (state, validationType, valid) =>
state.map(check => check.type === validationType ? { ...check, error: valid } : check);

export const validation = (state = initialValidationState.validation, action) => {
	switch (action.type) {
		case EMAIL_ENTERED:
			return validate(state, 'empty email', false);
		case EMAIL_EMPTY:
			return validate(state, 'empty email', true);
		case EMAIL_VALID:
			return validate(state, 'invalid email', false);
		case EMAIL_INVALID:
			return validate(state, 'invalid email', true);
		case MONTH_VALID:
			return validate(state, 'empty month', false);
		case MONTH_INVALID:
			return validate(state, 'empty month', true);
		case DAY_VALID:
			return validate(state, 'empty day', false);
		case DAY_INVALID:
			return validate(state, 'empty day', true);
		case YEAR_VALID:
			return validate(state, 'empty year', false);
		case YEAR_INVALID:
			return validate(state, 'empty year', true);
		case TOS_VALID:
			return validate(state, 'empty terms and conditions', false);
		case TOS_INVALID:
			return validate(state, 'empty terms and conditions', true);
		default:
			return state;
	}
};
