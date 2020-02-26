import { onFormSubmitSuccess, onFormSubmitFail } from '../redux/submission/actions';
import { SUBMIT } from '../redux/submission';

const SubmissionMiddleWare = store => next => action => {
	const {data}  = store.getState();	
  if(typeof action =='object'){
    switch(action.type){
      case `${SUBMIT}_FULFILLED`:
        next(action);
        let submissionSuccessData = {response:action.payload.data, isVideo: data.isVideo, trackingContext: data.trackingContext}
				return store.dispatch (onFormSubmitSuccess(submissionSuccessData));	
    
			case `${SUBMIT}_REJECTED`:
				next(action);			
				return store.dispatch(onFormSubmitFail(action.payload.response, data.trackingContext, data.signupErrorList));	
        
      default:
        return next(action)
    } 
  } else {
    return next(action)
  } 
} 

export default SubmissionMiddleWare