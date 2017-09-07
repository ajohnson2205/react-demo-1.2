import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoList from './components/ToDoList/ToDoList';
import ThisLogger from './components/ThisLogger/ThisLogger';
import LukeComponent from './components/StarWarsCharacters/LukeComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskList: ['This is my first task'],
      clearTask: false
    }
  }

  addTask = (task) => {
    let newTaskList = this.state.taskList.slice()
    newTaskList.push(task)
    this.setState({
      taskList: newTaskList,
      clearTask: true
    })
  }

  testing = () => {
    console.log(this)
  }

  thisTesting() {
    console.log(this)
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
            addTask={this.addTask}
            clearTask={this.state.clearTask}/>
          <ThisLogger
            testing={this.testing}
            thisTesting={this.thisTesting}
            propExample={'I am the props object'}/>

        </p>
      </div>
    );
  }
}

export default App;
