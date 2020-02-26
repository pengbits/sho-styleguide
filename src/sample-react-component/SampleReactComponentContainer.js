import React, { Component } from 'react';
import { updateLike } from './SampleReactComponentActions';
import { connect } from 'react-redux';
import SampleReactComponent from './SampleReactComponent';

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	return {
		dispatchUpdateLike: () => {
			return dispatch(updateLike())
		} 
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SampleReactComponent);