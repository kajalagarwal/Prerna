import React, { Component } from 'react';
import './styles/index.css';
import Prerna from './assets/images/prerna.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={Prerna} className="App-logo" alt="logo" />
            <h2 className="headline uppercase">Prerna Budhkar</h2>
          </div>
          <div className='hidden-xs emphasis smallHeadline marginTop20'>
            <Link to="/home" className='marginRight20 darkCoralText'> Home </Link>
            <Link to='/publication' className='marginRight20 darkCoralText'> Publications </Link>
            <Link to='/research' className='marginRight20 darkCoralText'> Experience </Link>
            <Link to='/activity' className='marginRight20 darkCoralText'> Activities </Link>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
