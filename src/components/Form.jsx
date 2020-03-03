import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
	// constructor() {
	// 	super();

	state = {
		size: ''
	};

	// this.handleChange = this.handleChange.bind(this);
	// this.handleSubmit = this.handleSubmit.bind(this);
	// }

	handleOnChange = event => {
		console.log(event.target.value);
		this.setState({
			size: event.target.value
		});
	};

	handleOnSubmit = event => {
		const { size } = this.state;
		event.preventDefault();

		alert(`You chose the ${size} pizza.`);
	};

	render() {
		const { size } = this.state;
		return (
			<form onSubmit={this.handleOnSubmit}>
				<p className='title'>Select a pizza size:</p>

				<ul>
					<li>
						<label>
							<input
								type='radio'
								value='small'
								checked={size === 'small'}
								onChange={this.handleOnChange}
							/>
							Small
						</label>
					</li>

					<li>
						<label>
							<input
								type='radio'
								value='medium'
								checked={size === 'medium'}
								onChange={this.handleOnChange}
							/>
							Medium
						</label>
					</li>

					<li>
						<label>
							<input
								type='radio'
								value='large'
								checked={size === 'large'}
								onChange={this.handleOnChange}
							/>
							Large
						</label>
					</li>
				</ul>

				<button type='submit' className='submit-button'>
					Make your choice
				</button>
			</form>
		);
	}
}

export default Form;
