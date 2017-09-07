import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('These are the updated props', nextProps)
    console.log('These are the old props', this.props)
    if(nextProps.clearTask === true) {
      this.clearTask()
    }
  }

  updateCurrentTask = (val) => {
    this.setState({
      task: val
    })
  }

  clearTask = () => {
    this.setState({
      task: ''
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
