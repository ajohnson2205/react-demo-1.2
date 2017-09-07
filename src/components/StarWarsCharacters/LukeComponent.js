import React, { Component } from 'react';

import { getPeople } from '../../services/apiGrabber';



export default class LukeComponent extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    console.log('I am firing ')
    var people = getPeople()
    this.setState({
      people: people
    })
  }
  render() {
    return(
      <div>

      </div>
    )
  }
}
