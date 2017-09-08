import React, { Component } from 'react';

import {people} from '../services/fakeData';



export default class LukeComponent extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    console.log('I am firing ')
    var people = this.getPeople()
    this.setState({
      people: people
    })
  }

 getPeople() {
    return people;
  }


  render() {
    return(
      <div>

      </div>
    )
  }
}
