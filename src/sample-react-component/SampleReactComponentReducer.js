import { UPDATE_LIKE } from './SampleReactComponentActions';

const SampleReactComponentReducer = (state = { like: true }, action) => {
	switch (action.type) {
		case UPDATE_LIKE:
			return {
				like: !state.like
			}
		default:
			return state
	}
}

export default SampleReactComponentReducer