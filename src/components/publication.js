import React, { Component } from 'react';
import '../styles/index.css';

export default class Publication extends Component {

  hideDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
  }

  render() {
    return (
      <div className='marginTop40' onClick={this.hideDropdown}>
        <div className='col-md-8 col-md-offset-2 leftAligned'>
          <span className="lead bolder">
            FPGA-Accelerated Group-by Aggregation Using Synchronizing Caches:
          </span>
          <p className='darkGrayText'>DaMoN 2016</p>
          <p>Absalyamov Ildar, <span className='bold'> Prerna Budhkar,</span> Windh Skyler, Halstead, Robert J, Najjar Walid A, Tsotras Vassilis J.</p>
          <span className="lead bolder">
            CAMs as Synchronizing Caches for Multithreaded Irregular Applications on FPGAs:
          </span>
          <p className='darkGrayText'>ICCAD 2015: 331-336</p>
          <p>Skyler Windh, <span className='bold'> Prerna Budhkar</span> and Walid A. Najjar.</p>
          <span className='lead bolder'>
            High Level Language Tools for Reconfigurable Computing:
          </span>
          <p className='darkGrayText'>Proceedings IEEE 2015</p>
          <p>Skyler Windh, Xiaoyin Ma, Robert Halstead,<span className='bold'> Prerna Budhkar,</span> Omar Hussaini, Zabdiel Luna, Walid Najjar</p>
          <span className='bolder lead'>
            Solving Intersection Searching Problem for Spatial Data Using Bloom Filters:
          </span>
          <p>IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT), 2013</p>
          <p className='bold'>Prerna Budhkar</p>
        </div>
      </div>
    );
  }
}
