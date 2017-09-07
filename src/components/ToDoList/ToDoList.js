import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      task: 'asdfsaf'
    }
  }

  componentWillReceiveProps(newProps, oldProps) {
    console.log('newProps', newProps, 'oldProps', oldProps)
  }

  updateCurrentTask = (val) => {
    this.setState({
      task: val
    })
  }

  render() {
    return (
      <div>
      <ul>
        {this.props.taskList.map((task) => {
          return <li>{task}</li>
        })}
      </ul>
      <input value={this.state.task} onChange={(e) => this.updateCurrentTask(e.target.value)}/>
      <button onClick={() => this.props.addTask(this.state.task)}>Add Task</button>
      </div>
    )
  }
}
