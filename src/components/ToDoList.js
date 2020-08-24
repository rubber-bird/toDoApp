import React, {Component} from 'react'
import ReactDOM from 'react-dom'



class ToDoList extends Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
				<li key={item.id}> {item.text} </li>
				))}
			</ul>
			
		)
	}
}

export default ToDoList;