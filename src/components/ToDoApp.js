import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ToDoList from './ToDoList'


class ToDoApp extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			tasks: ['task 1', 'task 2', 'task 3'] 
		}
	}

	render() {
		return (
			<ToDoList items={this.state.tasks} />
		)
	}
}

export default ToDoApp;