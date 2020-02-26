// action types
export const SUBMIT = 'SUBMISSION/SUBMIT';
export const SIGNUP_SUCCESS = 'SUBMISSION/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SUBMISSION/SIGNUP_ERROR';

//action creators
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signupError = (error) => ({
  type: SIGNUP_ERROR,
  payload: error,
}); 

// submission reducer
const initialSubmissionState = {
  pending: null,
  success: null,
  error: null
} 

export  const submission = (state = initialSubmissionState, action) => {

  switch (action.type) { 
    case `${SUBMIT}_PENDING`:
      return {...state, 
        pending: true 
      };
    case `${SUBMIT}_FULFILLED`:
      return {...state,
        pending: false
      };
    case `${SUBMIT}_REJECTED`:
      return {...state, 
        error: action.payload.response.statusText
      };
    case SIGNUP_SUCCESS:
      return {...state, 
        success: true
      };
    case SIGNUP_ERROR:
      return {...state, 
        error: action.payload
      };
    default:
      return state;
    }
  }; 
  export default submission;