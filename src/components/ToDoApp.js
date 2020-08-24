import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ToDoList from './ToDoList'
import Header from './Header'


class ToDoApp extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			tasks: ['task 1', 'task 2', 'task 3'] 
		}
	}

	render() {
		return (
			<div>
			<Header numTodo={this.state.tasks.length} />
			<ToDoList items={this.state.tasks} />
			</div>
		)
	}
}

export default ToDoApp;