import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Note extends Component {
  render() {
  return (
    <div>
    <h2>Welcome to Note!</h2>
    <p>
      <Link to="/contact">Click Here</Link> to contact us!
    </p>
    </div>
  )
  }
}
