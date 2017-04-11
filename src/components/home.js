import React, { Component } from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12 marginBtm40'>
          <p className="marginTop20 col-md-8 col-md-offset-2 col-xs-12 lead leftAligned">
            Hi, My name is Prerna Budhkar and I am a PhD candidate advised by Dr. Walid A. Najjar at
            the University of California, Riverside. My research is mainly focused on how FPGAs can help
            improve High Performance Computing (HPC) applications. I am currently working on developing
            FPGA-based Multithreading techniques for irregular applications such as data analytics and graph
            processing.
          </p>
        </div>
        <div className='text-center'>
          <span className='bolder'><a href='https://www.github.com/' className='darkCoralText'>Github</a></span>
          <span className='darkGrayText bolder marginRight5 marginLeft5'>|</span>
          <span className='bolder'><a href='https://www.linkedin.com/in/prerna-budhkar/' className='darkCoralText'>Linkedin</a></span>
          <span className='darkGrayText bolder marginRight5 marginLeft5'>|</span>
          <span className='bolder darkCoralText hoverPointer' onClick={() => (window.location.href = "mailto:address@dmail.com")}>
            Email
          </span>
          <span className='darkGrayText bolder marginRight5 marginLeft5'>|</span>
          <span className='bolder darkCoralText hoverPointer' onClick={() => (window.location.href='tel:9518074060')}>
            Phone
          </span>
        </div>
      </div>
    );
  }
}