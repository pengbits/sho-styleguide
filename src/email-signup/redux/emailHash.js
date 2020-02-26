import cookies from '../../utils/cookies';
import axios from 'axios';

// action types
export const STORE_EMAIL_HASH = 'EMAIL_HASH/STORE_EMAIL_HASH';
export const INIT_EMAIL_HASH = 'EMAIL_HASH/INIT_EMAIL_HASH';


//helper functions
const emailHashAPIFormData = (videoName, emailHash) => () => {
  let formData, emailHashConfigOptions
  formData=  { 
    "emailHash": emailHash,
    "event" : [{
      "name":"VIDEO_EVENT", 
      "value": videoName
    }]
  };

  emailHashConfigOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: formData,
    url: '/api/event/tracking',
  };
  return emailHashConfigOptions
};

export const setEmailHashCookie = emailHash => (dispatch) => {
  cookies.set('generic', emailHash, 10);
  dispatch (storeEmailHash(emailHash)) 
};

// action creators

export const initEmailHash = (videoName, emailHash) => (dispatch) => {
  let configOptions;
  configOptions = dispatch(emailHashAPIFormData(videoName, emailHash));
  return dispatch ({
    type: INIT_EMAIL_HASH,
    payload: axios(configOptions) 
  });
};

const storeEmailHash = (emailHash) => ({
  type: STORE_EMAIL_HASH,
  payload: emailHash
});

const initialEmailHashState = null;  
  
//Email Hash Reducer  
export const emailHash = (state = initialEmailHashState, action) => {  
	switch (action.type) {
    case `${INIT_EMAIL_HASH}_PENDING`:
      return {...state
      };
    case `${INIT_EMAIL_HASH}_FULLFILLED`:
      return {...state, 
        emailHash: payload.emailHash
      };
    case `${INIT_EMAIL_HASH}_REJECTED`:
      return {...state
      };   
		case STORE_EMAIL_HASH:
			return {...state, 
				emailHash: action.emailHash
			};
		default:
			return state;
	}
};