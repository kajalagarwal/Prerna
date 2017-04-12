import React, { Component } from 'react';
import '../styles/index.css';

export default class Activity extends Component {

  hideDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
  }

  render() {
    return (
      <div className='marginTop40' onClick={this.hideDropdown}>
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
          <p className='smallHeadline marginTop40'>Computer Skills</p>
          <p>
            <span className='lead bolder'>Hardware Languages: </span>
            <span>Verilog, Bluespec Verilog, VHDL</span>
          </p>
          <p>
            <span className='lead bolder'>HDL Synthesis Tools: </span>
            <span>Xilinx ISE, Xilinx Vivado, Altera Quartus</span>
          </p>
          <p>
            <span className='lead bolder'>Software Languages: </span>
            <span>C, C++, Python, Working knowledge of Java</span>
          </p>
        </div>
      </div>
    );
  }
}
