import React, { Component } from 'react';
import classNames from 'classnames';

class SampleReactComponent extends Component {
	constructor(props) {
		super(props);
	}
	
	_onClick() {
		const { dispatchUpdateLike } = this.props;
		dispatchUpdateLike()
	}
	
	render() {
		return (
			<div>
				<h2 className="sample-react-component__header">This is a Sample React Component</h2>
				<div className="sample-react-component__button" onClick={this._onClick.bind(this)}>
					<i className={classNames("sample-react-component__button-icon",
											 						 { "sample-react-component__button-icon--thumbsup": this.props.like,
											 	 						 "sample-react-component__button-icon--thumbsdown": !this.props.like
											 	 					 })}>
					</i>
				</div>
			</div>	
		)
	}
}

export default SampleReactComponent