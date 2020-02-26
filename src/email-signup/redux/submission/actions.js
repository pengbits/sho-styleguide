import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';
import { signupSuccess, signupError, SUBMIT } from '.'; 
import { setEmailHashCookie } from '../emailHash'; 

export const trackEvent = (type, context, errors) => () => {
  const tracking = { type, context };
  if (errors) tracking.errors = errors;
  $.event.trigger(tracking);
};

export const videoSuccess = (res) => () => {
  $.event.trigger({ type: 'videoEmailSignupSuccess' });
  // throw a native event that the in-page js can observe WITHOUT relying on jquery
  var e = document.createEvent('Event') 
  e.initEvent('VideoEmailSignupSuccessAutoplay', false, true) 
  document.dispatchEvent(e)
};

export const onFormSubmitSuccess = (submissionSuccessData) => (dispatch) => {
  dispatch(trackEvent('emailSignupSuccess', submissionSuccessData.trackingContext));
  dispatch(signupSuccess());
  if (submissionSuccessData.isVideo) {
    dispatch(videoSuccess());
    dispatch (setEmailHashCookie(submissionSuccessData.response.payload.emailHash))
  }
};  

export const onFormSubmitFail = (response, trackingContext, signupErrorList) => (dispatch) => {
  const errorMessage = 'Sorry, but something went wrong, please try again.'
  const responseString = response.status + ' ' + response.statusText;
  signupErrorList.push(responseString);
  dispatch(trackEvent('emailSignupError', trackingContext, signupErrorList));
  dispatch(signupError(errorMessage));
};

const getVideoAPIFormData = (formDataStore)  => {
  let formData, videoConfigOptions
  formData=  { 
    "emailAddress": formDataStore.email, 
    "pubId": formDataStore.pubId,
    "dob": formDataStore.birthdate,
    "event" : [{
      "name":"VIDEO_EVENT", 
      "value": formDataStore.videoName
    }] 
  }
  videoConfigOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(formData),
    url: '/api/event/tracking',
  };
  return videoConfigOptions
};

const getNewsletterAPIFormData = (formDataStore) => {
  let formData, newsletterConfigOptions
  let host = formDataStore.host;
  formData = { birthdate:formDataStore.birthdate, pubId:formDataStore.pubId, email:formDataStore.email };
  newsletterConfigOptions = { 
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(formData), 
    url: `${host}/api/accounts/newsletter/subscription`,  
  };
  return newsletterConfigOptions
};

export const formSubmit = (formDataStore) => (dispatch) => {
  let configOptions;
  if (formDataStore.isVideo) { 
    configOptions = getVideoAPIFormData(formDataStore);   
   }
  else {    
    configOptions = getNewsletterAPIFormData(formDataStore);  
  }

  return dispatch ({
    type: SUBMIT,
    payload: axios(configOptions) 
  });
};
