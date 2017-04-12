import React, { Component } from 'react';
import '../styles/index.css';

export default class Research extends Component {

  hideDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
  }

  render() {
    return (
      <div className='marginTop40' onClick={this.hideDropdown}>
        <div className='col-md-8 col-md-offset-2 leftAligned'>
          <p className='smallHeadline marginBtm20'>Work Experience</p>
          <span className="lead bolder">
            Research Assistant, University of California, Riverside
          </span>
          <p className='darkGrayText'>Sept 2013 - present</p>
          <p className='darkGrayText'>Advised By Dr. Walid A. Najjar</p>
          <p className='marginBtm20'>
            My research is mainly focused on exploring hardware solutions for fast and effective big
            data analysis and processing. I am currently working on developing FPGA-based Multithreading
            techniques for big data analytics and graph processing.
          </p>
          <span className="lead bolder">
            Research Intern, Pacific Northwest National Lab, Washington
          </span>
          <p className='darkGrayText'>Jun 2015 - Sept 2015</p>
          <p className='marginBtm20'>
            Build the hardware interface to support runtime query processing on Convey-HC2ex machine
          </p>
          <span className="lead bolder">
            Associate Engineer, Eaton India Engineering Centre, Pune, India
          </span>
          <p className='darkGrayText'>Jun 2011 - July 2013</p>
          <p>
            Hardware Solution for AFDX(Avionics Full-Duplex Switched Ethernet
          </p>
          <p>
            Generic software tool for diagnosing, configuring and monitoring hydraulic valves.
          </p>
          <p className='smallHeadline marginBtm20 marginTop30'>Teaching Experience</p>
          <span className='lead bolder'>
            Teaching assistance, Computer Architecture, University of California, Riverside
          </span>
          <p className='darkGrayText'>Fall 2014, Winter 2015, Spring 2015</p>
        </div>
      </div>
    );
  }
}
