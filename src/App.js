import React, { Component } from 'react';
import './styles/index.css';
import Prerna from './assets/images/prerna.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home.js';
import Activity from './components/activity.js';
import Research from './components/research.js';
import Publication from './components/publication.js';
import { Link } from 'react-router-dom';

class App extends Component {
  openLink = (link) => {
    window.location.href = `/${link}`;
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={Prerna} className="App-logo" alt="logo" />
            <h2 className="headline uppercase">Prerna Budhkar</h2>
          </div>
          <div className='hidden-xs emphasis smallHeadline'>
            <Link to="/home"> Home </Link>
            <Link to="/publication"> Publications </Link>
            <Link to="/research"> Research Interests </Link>
            <Link to="/activity"> Activities </Link>
          </div>
          <p className="marginTop20 col-md-8 col-md-offset-2 col-xs-12 lead leftAligned">
            I am a PhD candidate advised by Professor  at the University of California, Riverside.
          </p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
