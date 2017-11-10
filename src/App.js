import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="pull-left"><strong>Movie Application Demo</strong>   <small>About Us Page</small></span>
        </header>
        <div className="App-intro">
          <div className = "container-fluid row col-md-12 content">
            <Routes />
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
