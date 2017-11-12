import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';

import { BrowserRouter as Router , Route , Link , BrowserHistory } from 'react-router-dom';



// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={App} history = {BrowserHistory}/>
        <Route path="/dashboard" component={Dashboard}/>
    </div>
</Router>, document.getElementById('root'));
