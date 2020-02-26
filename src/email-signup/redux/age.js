import moment from 'moment';

//action types
export const AGE_VALID = 'VALIDATION/AGE_VALID';
export const AGE_INVALID = 'VALIDATION/AGE_INVALID';

//action creactors for age
const ageValid = dob => ({
	type: AGE_VALID,
	payload: dob
});

const ageInvalid = dob => ({
	type: AGE_INVALID,
	payload: dob
});

export const ageValidation = dob => (dispatch) => {
	const userAgeBday = moment(dob, 'MMDDYYYY');
	const eighteenYearsAgo = moment().subtract(18, 'years');
	if (eighteenYearsAgo.isAfter(userAgeBday)) {
		dispatch(ageValid(dob));
		return true;
	}
	dispatch(ageInvalid(dob));
	return false;
};
	
//age reducer
export const initialAgeState = {eligible: null, dob: null};

export const age = (state = initialAgeState, action) => {  
	switch (action.type) {
		case AGE_VALID:
			return {...state, 
				eligible: true,
				dob: action.payload.dob
			};
		case AGE_INVALID:
			return {...state, 
				eligible: false,
				dob: action.payload.dob
			};
		default:
			return state;
	}
};
 