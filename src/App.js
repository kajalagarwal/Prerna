import React, { Component } from 'react';
import './styles/index.css';
import Prerna from './assets/images/prerna.jpeg';
import Publication from './components/publication.js';
import Activity from './components/activity.js';
import Research from './components/research.js'
import 'bootstrap/dist/css/bootstrap.css';

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
          <div className='col-md-6 col-md-offset-3 marginTop20 smallSubCopy emphasis bolder hidden-xs'>
            <p className='col-md-2' onClick={() => this.openLink('home')}>Home</p>
            <p className='col-md-3' onClick={() => this.openLink('publication')}>Publications</p>
            <p className='col-md-4' onClick={() => this.openLink('research')}>Research Interets</p>
            <p className='col-md-3' onClick={() => this.openLink('activitiy')}>Activities</p>
          </div>
          {
            window.location.pathname === '/home' ? (
              <p className="marginTop20 col-md-8 col-md-offset-2 col-xs-12 lead leftAligned">
                I am a PhD candidate advised by Professor Rajiv Gupta at the University of California, Riverside.
                I am also fortunate to work with Professor Guoqing (Harry) Xu  from University of California, Irvine.
                My research interests lie in the broad area of Parallel & Distributed Computing including their
                Programmability, Performance, Scalability & Fault Tolerance. I am part of the GRASP team which
                focuses on fast and scalable solutions for graph processing.
              </p>
            ) : ''
          }
        </div>
        {
          window.location.pathname === '/publication' ? (
            <Publication/>
          ) : ''
        }
        {
          window.location.pathname === '/research' ? (
            <Research/>
          ) : ''
        }
        {
          window.location.pathname === '/activitiy' ? (
            <Activity/>
          ) : ''
        }
      </div>
    );
  }
}

export default App;
