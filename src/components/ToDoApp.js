import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ToDoList from './ToDoList'
import Header from './Header'


class ToDoApp extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			tasks: [],
			text: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		return (
			<div>
				<Header numTodo={this.state.tasks.length} />
				<ToDoList items={this.state.tasks} />
				<form onSubmit={this.handleSubmit}>
					<input
						
						value = {this.state.text}
						onChange = {this.handleChange}
					 />

					 <button className = 'button'>Submit</button>
				</form>
			</div>
		)
	}

	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.text.length === 0) 
			return;

		const newItem = {
			text: this.state.text,
			id: Date.now()
		}

		this.setState(state => ({
			tasks: state.tasks.concat(newItem),
			text: ''
		}))
	}

	handleDelete(idx) {
		const newArr = [...this.state.tasks]
		newArr.splice(idx, 1)
		this.setState({ tasks: newArr })
	}
}

export default ToDoApp;