import React, { Component } from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import cn from 'classnames';
import moment from 'moment';
import cookies from '../../utils/cookies.js'; 

class AgeGateComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			month: '',
			day: '',
			year: '',
			errors: '',
			success: ''
		};
		this.age = this.props.age;
		this.handleChangeMonth= this.handleChangeMonth.bind(this);
		this.handleChangeDay = this.handleChangeDay.bind(this);
		this.handleChangeYear = this.handleChangeYear.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (this.getLockoutCookie()) {			
			this.setState({ errors: { ...this.state.errors, errormsg: 'We\'re sorry. You are ineligible to watch this video.', lockout:true}});				
		}
	}

	handleChangeMonth (event){
		this.setState({month: event.target.value});
	}
	
	handleChangeDay  (event){
		this.setState({day: event.target.value});
	}
	
	handleChangeYear (event){
		this.setState({year: event.target.value});
  }

  handleSubmit (event){
		event.preventDefault();
		this.validate();	
	}

	validate() {
		this.checkDateFormat();
	}
	
	checkDateFormat () {
		const dob = this.pad(this.state.month) + this.pad(this.state.day) + this.state.year;
		let isDobValid = true;
		if (moment(dob, "MMDDYYYY", true).isValid() == false || null)
		{
			isDobValid=false;
		}

		if(isDobValid==false)
		{
			this.setState({ errors: { ...this.state.errors, errormsg: 'That is not a valid date of birth'}});	
		}
		else
		{			
			this.checkForUnderageUser(dob);
		}
	}

	//padding single digit month and day by checking the length then adding 0 if more than 1
	pad (datevalue)
  {
		if ((datevalue.toString().length) === 1)
		{
	 		datevalue = ('0' + datevalue);
		}	
		return datevalue;
	}

	checkForUnderageUser(dob) 
  {
    var userAgeBday = moment(dob, "MMDDYYYY");
    var currentDate = moment().format('MMDDYYYY');
    var ageGateLimit = moment().subtract(this.age, "years");
    var dobFlag = false;

    if (ageGateLimit.isAfter(userAgeBday)) {
			this.setState({ errors: { ...this.state.errors, success: true}});	
			$.event.trigger({ type: 'videoAgeGateSuccess' });
    }
    else {		
			this.setLockoutCookie (userAgeBday);
    }
  }

  setLockoutCookie(underagedDob) 
  {
    cookies.set('agegateCookie', underagedDob, 2); // 2 days
		this.setState({ errors: { ...this.state.errors, errormsg: 'We\'re sorry. You are ineligible to watch this video.', lockout:true}});
   }

	 /*
  =:util cookie functions*/
	
	getLockoutCookie() 
  {
    return !!cookies.get('agegateCookie');
  }

	render() {
		if (this.state.errors.lockout) {
			return (
				<div className="video-playr__age-gate">
					<h5 className="video-playr__age-gate__message">{this.state.errors.errormsg} </h5>
				</div>
			)
		}		
		if (this.state.errors.success) {
			return null;
		}
		return (
			<div className="video-playr__age-gate">
			<h5 className={cn('video-playr__age-gate__message', {'has_errors': this.state.errors})}>{this.state.errors ? "Invalid date of birth" :"Please enter your date of birth to watch this video:"}</h5>
			<form action="#" onSubmit={this.handleSubmit} className={cn("video-playr__age-gate__form",{'has_errors': this.state.errors})}>
				<p className="video-playr__age-gate__date-of-birth">
				<input name="month" type="text" size="2" placeholder="MM" value={this.state.month} onChange={this.handleChangeMonth}/>
				<input name="day" type="text" size="2" placeholder="DD" value={this.state.day} onChange={this.handleChangeDay}/>
				<input name="year" type="text" size="4" placeholder="YYYY" value={this.state.year} onChange={this.handleChangeYear}/>
				</p><button className="button--solid-red btn-submit">Submit</button>
			</form>
		</div>
		)
	}
}

export default AgeGateComponent