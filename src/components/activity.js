import React, { Component } from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Activity extends Component {
  render() {
    return (
      <div className='col-md-8 col-md-offset-2'>
        <h2>Talks</h2>
        <ol>
          <li>First</li>
          <li>Second</li>
        </ol>
      </div>
    );
  }
}
