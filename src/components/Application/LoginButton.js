import React, { Component } from 'react';

class LoginButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultUser : 'Nirmal',
            isLoggedInuser : false
        };
    }

    getUserIn(){
        this.setState({
            isLoggedInuser : !this.state.isLoggedInuser
        });
    }
    
  render() {
    this.getUserIn  = this.getUserIn.bind(this);
        let defaultUser = this.state.defaultUser;

    return (
      <div>
        <button type="button" className="btn btn-sm btn-primary pull-right loginBtn" onClick={this.getUserIn}>{(this.state.isLoggedInuser ? "Welcome - "+defaultUser : 'Log In') }</button>
      </div>
    );
  }
}

export default LoginButton;
