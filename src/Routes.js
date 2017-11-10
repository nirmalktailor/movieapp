import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , Redirect , withRouter } from 'react-router-dom';


const Home = () => {
    return <h1>Dash Board</h1>;
}

const About = () => {
    return <h1>About Here</h1>;
}

const Child = ({ match }) => {    
    return <div>
        <h1>You clicked on <small>{ match.params.id }</small></h1>
    </div>;
}

class Routes extends Component {
  render() {
    return <Router>
        <div>
            <div><Link to = "/netflix">Netflix</Link></div>
            <div><Link to = "/amazon">Amazon Prime Video</Link></div>
            <div><Link to = "/yahoo">Yahoo</Link></div>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/:id" component={Child}/>
        </div>
    </Router>
  }
}


export default Routes;
