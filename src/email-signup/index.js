import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';

class EmailSignup
{

  constructor(cfg) {
    var el = $(cfg.el); _.extend(this, {
      'component'    : el,
      'form'         : el.find('.email-signup-form'),
      'email-address': el.find('.input-box-email'),
      'birth-month'  : el.find('.select-month'),
      'birth-day'    : el.find('.select-year'),
      'birth-year'   : el.find('.select-day'),
      'tos-agree'    : el.find('.email-signup__tos-input'),
      'submitButton' : el.find('.email-signup__submit-btn'),
      'errors'       : []
    }); 

    var today  = new Date();
    this.day   = today.getUTCDate();
    this.month = today.getUTCMonth();
    this.year  = today.getUTCFullYear();
    this.dataContext = $(this.submitButton).data('context').toLowerCase();
    this.initialise();
  }

  initialise() {
    //check if user is already locked out
    // otherwise generate select drop down options
    if (!this.hasLockoutCookie()){
      this.buildDateOptions();
    }
    
    // listen for form submit
    $(this.submitButton).on('click', (event) => {
      $.event.trigger({
        type: 'emailSubmit',
        context: this.dataContext
      });
      
      event.preventDefault();
      event.target.disabled = true; 
      this.validateForm();
    });
    $(this.submitButton).removeAttr('disabled'); //when Firefox browser ineligble cookie is deleted via the browser and page is reloaded the submitted button was disabled.
  }

  buildDateOptions() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']; //just incase we decide to use months we can use this array 
    var yeardropdown =  document.getElementById('select-year'),
        daydropdown = document.getElementById('select-day'),
        monthdropdown = document.getElementById('select-month'),
        daysInCurrMonth = this.daysInMonth(this.month,this.year)
    ;

    $("#select-month").change(() => {
      this.calcDaysInMonth(yeardropdown,monthdropdown,daydropdown,daysInCurrMonth);
    }); 

    $("#select-year").change(() => {
      this.calcDaysInMonth(yeardropdown,monthdropdown,daydropdown,daysInCurrMonth);
    }); 

    this.populateDates(yeardropdown,monthdropdown,daydropdown,daysInCurrMonth);
  }

  calcDaysInMonth(yeardropdown,monthdropdown,daydropdown,daysInCurrMonth) {
      var newMonth = monthdropdown.selectedIndex,
      newYear = yeardropdown.value, 
      leapYear = 2012,
      daySelect = daydropdown.selectedIndex;

      if (!isNaN(newYear)) {
        daysInCurrMonth = this.daysInMonth(newMonth, newYear);
      }
      else {
        daysInCurrMonth = this.daysInMonth(newMonth, leapYear); 
      }
      daydropdown.innerHTML = "";
      $("#select-day").html('<option value="0" selected="" hidden="">DD</option>');

      for(var i = 0; i < daysInCurrMonth; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.text = i + 1;
        daydropdown.appendChild(opt); 
      }
      if (daySelect > daysInCurrMonth) {
        daydropdown.selectedIndex = daysInCurrMonth; 
      }
      else {
        daydropdown.selectedIndex = daySelect;
      }    
      return daysInCurrMonth;
  }

  daysInMonth(mth,yr) {
    return new Date(yr, mth, 0).getDate();
  }

  populateDates(yeardropdown, monthdropdown, daydropdown, daysInCurrMonth){
    // Year
    for (var i = this.year; i > 1900; i--) {
      var opt = document.createElement('option');
      opt.value = i;
      opt.text = i;
      yeardropdown.appendChild(opt);
    }

    // Month
    for (var i = 0; i < 12; i++) {
      var opt = document.createElement('option');
      opt.value = i + 1;
      opt.text = (i + 1);
      monthdropdown.appendChild(opt);
    }
    // Day
    for (var i = 0; i < daysInCurrMonth; i++) {
      var opt = document.createElement('option');
      opt.value = i + 1;
      opt.text = i + 1;
      daydropdown.appendChild(opt);
    }
  }

  // first check if user is already locked out
  hasLockoutCookie() {
    var emailSignupCookie = this.readCookie('email-signupCookie');

    if (emailSignupCookie == null) {
        return null;
    }

    else {
      this.component.remove();
      return true;
    }
  }

  // cookie check, null if it's not there
  readCookie(name)  {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  validateForm() {
    var pattern = /\S+@\S+\.\S+/,
    valid = true,
    emailCheck = true,
    dobCheck = true,
    toCheck = true,
    errorMessage = '',
    dob = '',
    $email = $('#email-address'),
    noEmailError = `Please enter an email`,
    validEmailError = `Please enter a valid email`,
    validMonthError = `Please enter a valid month`,
    validDayError = `Please enter a valid day`,
    validYearError = `Please enter a valid year`,
    tosError = `Please accept the Terms and Conditions`,
    data = {};

    //clear out previous errors in case this is a resubmit
    $('.email-signup__validation').empty();
    this.errors = [];

    // make sure an email is entered
    if ($email.val() == '') {
      $('#email-address').addClass('email-signup__error--form');
      $('.email-signup__email-input .email-signup__label').addClass('email-signup__error--label');
      $('.input-box-email').addClass('email-signup__error--form');
      $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+noEmailError+'</span>' );
      errorMessage += 'Please enter your email\n';
      valid = false;
      emailCheck = false;
      this.errors.push('empty email');
    }

    // make sure email is in correct format
    if($email.val() !== '') {
      if(!pattern.test($email.val())){
        $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+validEmailError+'</span>' );
        $('.email-signup__email-input .email-signup__label').addClass('email-signup__error--label');
        $('.input-box-email').addClass('email-signup__error--form');
        errorMessage += "Please enter a valid email\n";
        valid  = false;
        emailCheck = false;
        this.errors.push('invalid email');
      }
    }
    if (emailCheck == true) {
      $('.email-signup__email-input .email-signup__label').removeClass('email-signup__error--label');
      $('.input-box-email').removeClass('email-signup__error--form');
    }

    // make sure a month is entered
    if ($('#select-month').val() == 'MM') {
      $('#select-month').addClass('email-signup__error--form');
      $('.email-signup__dob-select .email-signup__label').addClass('email-signup__error--label');
      $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+validMonthError+'</span>' );
      errorMessage  += 'Please enter a birth month \n';
      valid = false;
      dobCheck = false;
      this.errors.push('empty month');
    }

    // if it passes validation add the value to the dob variable
    else {
      var month = $('#select-month').val();
      dobCheck = true;
      month = this.pad(month);
      dob += month;
    }

    // make sure a day is entered
    if ($('#select-day').val() == 'DD' || $('#select-day').val() == '0') {
      $('#select-day').addClass('email-signup__error--form');
      $('.email-signup__dob-select .email-signup__label').addClass('email-signup__error--label');
      $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+validDayError+'</span>' );
      errorMessage  += 'Please enter a birth day \n';
      valid = false;
      dobCheck = false;
      this.errors.push('empty date');
    }

    // if it passes validation add the value to the dob varible
    else {
      var day = $('#select-day').val();
      dobCheck = true;
      day = this.pad (day);
      dob += day;
    }

    // make sure a year is entered
    if ($('#select-year').val() == 'YYYY') {
      $('#select-year').addClass('email-signup__error--form');
      $('.email-signup__dob-select .email-signup__label').addClass('email-signup__error--label');
      $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+validYearError+'</span>' );
      errorMessage  += 'Please enter a birth year \n';
      valid = false;
      dobCheck = false;
      this.errors.push('empty year');
    }

    // if it passes validation add the value to the dob varible
    else {
      dobCheck = true;
      dob += $('#select-year').val();
    }

    if (dobCheck == true) {
      $('.email-signup__dob-select .email-signup__label').removeClass('email-signup__error--label');
      $('select').removeClass('email-signup__error--form');
    }

    // make sure tos is checked
    if (!$('#tos-agree').is(':checked')){
      $('.check-box').addClass('email-signup__error--form');
      $('.email-signup__validation' ).append( '<span class="email-signup__validation--error">'+tosError+'</span>' );
      toCheck = false;
      errorMessage  += 'Please accept the Terms and Conditions\n';
      valid = false;

      this.errors.push('empty terms and conditions');
    }

    if (toCheck == true) {
      $('.check-box').removeClass('email-signup__error--form');
    }

    if(valid == false && errorMessage.length > 0){
      //show error messages in page
      $('.email-signup__validation').fadeIn('slow'); 
      $(this.submitButton).removeAttr('disabled');
      this.trackErrorEvent();
    }

    else {
       // the form is properly filled so move on to check age
       this.ageEligible(dob);
    }

  }

  //puts 0 in front of single digits since validation is expecting 2 digits
  pad(n) {
    if (n < 10) {
      return Number('0') + n;
    }
    else {
      return (n);
    }
 }

  ageEligible(dob) {
    var userAgeBday = moment(dob, 'MMDDYYYY');
    var currentDate = moment().format('MMDDYYYY');
    var eighteenYearsAgo = moment().subtract(18, 'years');
    
    if (eighteenYearsAgo.isAfter(userAgeBday)) {
      // over 18 go ahead and submit
      $(this.submitButton).disabled = true;
      this.submitForm();
    }

    else {
      // under 18 set lock out cooooookie
      this.errors.push('invalid age');
      this.trackErrorEvent();
      this.setLockoutCookie(userAgeBday);
      this.lockoutUser();
    }
  }

  setLockoutCookie(underagedDob)  {
    // name cookie and set it for 1 day
    this.createCookie('email-signupCookie', underagedDob, 1);
  }

  createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }

    else var expires ='';
    document.cookie = name+'='+value+expires+'; path=/';
    // event.preventDefault(); firefox does not like this
    this.submitOrLockout();
  }

  // lock out the user if they are ineligible but didn't have the cookie when they first got the page
  submitOrLockout() {
    var emailSignupCookie = this.readCookie('email-signupCookie');

    if (emailSignupCookie != null) {
        this.lockoutUser();
    }
  }

  lockoutUser() {
    // clear inner content and wag finger. "ah ah ahh"
    $('.email-signup__inner').hide();
    this.focusMessage('.email-signup__headline--lockout');
  }

  // grab values from the form and create an object to post to the api
  // trap default page reload and wait for api response
  submitForm() {
    var birthYear = $('#select-year').val();
    var birthMonth = $('#select-month').val();
    var birthDay = $('#select-day').val();
    var birthdate = birthMonth + '/' + birthDay + '/' + birthYear;
    var email = $('#email-address').val();
    var pubId = $('#pubId').val();
    var formData = {'birthdate':birthdate,'pubId':pubId,'email':email};
    this.component.append('<div class="email-signup__overlay"><div class="loading-animation"></div></div>')
    $.ajax({
      'type':         'POST',
      'url':          '/api/accounts/newsletter/subscription',
      'data':         formData,
      'success':      this.signupSuccess.bind(this),
      'error' :       this.signupError
    })
    event.preventDefault();
  }

  signupSuccess(data) {
    $('.email-signup__overlay').remove()
    // clear inner content and show thank you message
    //showing server messages depending on status code
    this.errors = [];
    
    if (data.statusCode == '400') {
      var responseString = (data.errorType.itemList.item[0]);  
      $('.email-signup__inner' ).hide();
      $('.email-signup__headline--error span').html(responseString);
      this.focusMessage('.email-signup__headline--error');
      this.errors.push(responseString);
      this.trackErrorEvent();
    }
    if (data.statusCode == '200') {
      $('.email-signup__inner' ).hide();
      this.focusMessage('.email-signup__headline--success')
      this.trackSuccessEvent();
    }
    if (data.statusCode == '500') {
      this.errors.push('500 status code');
      this.trackErrorEvent();
      this.signupError();
    }
  }
  
  
  focusMessage(selector){
    let msgElement = $(selector).fadeIn('slow');
    let nudge      = Number(this.component.css('border-right-width').replace('px',''));
    let elementTop = msgElement.offset().top - (nudge || 10);
    let scrollTop  = $(window).scrollTop();
    let isMobile   = $(window).width() < 768;
    
    if(isMobile && (elementTop < scrollTop)){
      $('html,body').animate({
        'scrollTop' : elementTop
      })
    }
  }

 // sign up error
  signupError() {
    $('.email-signup__overlay').remove()
    $('.email-signup__inner' ).hide();
    $('.email-signup__headline--error').fadeIn('slow');
  }
  
  // trigger analytics error event
  trackErrorEvent() {
    $.event.trigger({
      type: 'emailSignupError',
      errors: this.errors,
      context: this.dataContext
    });
  }
  
  // trigger analytics success event
  trackSuccessEvent() {
    $.event.trigger({
      type: 'emailSignupSuccess',
      context: this.dataContext
    });
  }
}

export default EmailSignup;
