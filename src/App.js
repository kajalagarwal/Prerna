import React, { Component } from 'react';
import './styles/index.css';
import Prerna from './assets/images/prerna.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class App extends Component {

  toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  hideDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="appHeader">
            <img src={Prerna} className="appLogo" alt="logo" />
            <h2 className="headline uppercase">Prerna Budhkar</h2>
          </div>
          <div className='hidden-xs emphasis smallHeadline marginTop20'>
            <Link to="/home" className='marginRight20 darkCoralText'> Home </Link>
            <Link to='/publication' className='marginRight20 darkCoralText'> Publications </Link>
            <Link to='/research' className='marginRight20 darkCoralText'> Experience </Link>
            <Link to='/activity' className='marginRight20 darkCoralText'> Activities </Link>
          </div>
          <div className="dropdown visible-xs">
            <button onClick={this.toggleDropdown} className="dropbtn">About Me</button>
            <div id="myDropdown" className="dropdownContent bolder categoryTitle">
              <Link to="/home" className='marginRight20 darkCoralText' onClick={this.hideDropdown}> Home </Link>
              <Link to='/publication' className='marginRight20 darkCoralText' onClick={this.hideDropdown}> Publications </Link>
              <Link to='/research' className='marginRight20 darkCoralText' onClick={this.hideDropdown}> Experience </Link>
              <Link to='/activity' className='marginRight20 darkCoralText' onClick={this.hideDropdown}> Activities </Link>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
