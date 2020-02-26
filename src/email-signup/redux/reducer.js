import {submission} from './submission'; 
import {validation} from './validation';
import {values} from './values';
import {age} from './age';
import {emailHash} from './emailHash';

// can't use combineReducers here because we want to mix in the ad-hoc 'data' reducer in index...
export const rootReducer = {
  age,
  emailHash,
  validation,
  submission,
  values
}
 
export default rootReducer
