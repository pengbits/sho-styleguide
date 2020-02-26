import React from 'react';
import { shallow, mount } from 'enzyme';
import SampleReactComponent from './SampleReactComponent';
import { UPDATE_LIKE, updateLike } from './SampleReactComponentActions';
import { default as reducer } from './SampleReactComponentReducer';

describe('<SampleReactComponent />', () => {
	test('renders', () => {
		let wrapper = shallow(<SampleReactComponent />)
		expect(wrapper).toHaveLength(1);
	})

	test('matches snapshot', () => {
		let wrapper = mount(<SampleReactComponent />)
		expect(wrapper).toMatchSnapshot();
	})

	describe('Redux', () => {
		test('updateLike() returns a type and payload', () => {
			let actual = updateLike(true);
			let expected = { 	
				type: UPDATE_LIKE,
				payload: true
		  };
			expect(actual).toEqual(expected);
		})

		test('reducer returns state with flipped boolean', () => {
			let initialState = { like: true };
			let action = updateLike(true);
			let actual = reducer(initialState, action);
			let expected = { like: false };
			expect(actual).toEqual(expected);
		})
	})
})