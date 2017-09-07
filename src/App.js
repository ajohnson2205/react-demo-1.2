import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoList from './components/ToDoList/ToDoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskList: ['This is my first task']
    }
  }

  addTask = (task) => {
    let newTaskList = this.state.taskList.slice()
    newTaskList.push(task)
    this.setState({
      taskList: newTaskList
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ToDoList
            taskList={this.state.taskList}
            addTask={this.addTask}/>
        </p>
      </div>
    );
  }
}

export default App;
