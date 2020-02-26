//actions
import {
	EMAIL_ENTERED,  
	EMAIL_VALID,
	MONTH_VALID,  
	DAY_VALID,  
	YEAR_VALID,  
	TOS_VALID
} from './validation';

//values reducer
export const setValue = (state, newValueKey, newValue) => {
	const values = { ...state.values };
	values[newValueKey] = newValue;
	return values;
};

export const initialValuesState = {};
  
export const values = (state = initialValuesState, action) => {
	switch (action.type) {
		case EMAIL_ENTERED:
			return setValue(state, 'email', action.value);
		case EMAIL_VALID:
			return setValue(state, 'email', action.value);
		case MONTH_VALID:
			return setValue(state, 'month', action.value);
		case DAY_VALID:
			return setValue(state, 'day', action.value);
		case YEAR_VALID:
			return setValue(state, 'year', action.value);
		case TOS_VALID:
			return setValue(state, 'tos', action.value);
		default:
			return state;
	}
};