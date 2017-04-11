import React, { Component } from 'react';
import '../styles/index.css';

export default class Activity extends Component {
  render() {
    return (
      <div className='row marginTop40'>
        <div className='col-md-8 col-md-offset-2 leftAligned'>
          <p className='smallHeadline marginBtm20'>Ongoing Projects</p>
          <span className="lead bolder">
            FPGA Accelerated SQL Selection
          </span>
          <p>
            SQL selection is a memory bound operation. In this project we extend the idea of
            FPGA-multi-threading to mask the memory latency and perform selection much faster than
            state of art approaches.
          </p>
        </div>
      </div>
    );
  }
}
