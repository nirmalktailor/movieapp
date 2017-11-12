import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import FormErrors from './FormErrors';
import { BrowserRouter as Router,Redirect,withRouter,hashHistory } from 'react-router-dom'; 


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            formErrors : {
                username : '',
                password : ''
            },
            userNameValid : false,
            passwordValid : false,
            formValid : false,
            redirect  : false
        };
    }
    
    
validateField(fieldName, value) {
  
    let fieldValidationErrors = this.state.formErrors;
    let userNameValid = this.state.userNameValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'username':
        if(value != 'admin' && value !=''){
            userNameValid = false;
        }else {
            userNameValid = true;
        }
        fieldValidationErrors.username = userNameValid ? '' : ' is invalid';
        break;
      case 'password':
      if(value != 'admin' && value !=''){
        passwordValid = false;
        }else {
            passwordValid = true;
        }
        fieldValidationErrors.password = passwordValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    userNameValid: userNameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState(
        {
            formValid: this.state.userNameValid && this.state.passwordValid,
            redirect : true
        }
    );
  }

handleUserInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name] : value},
    () => {this.validateField(name,value)});
}

handleLogin = () => {
    this.history.push("/dashboard");    
}

  render() {
    


    return (
        <div className="container-fluid">
         
         <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Movie DB Application</a>
                </div>
            </div>
            </nav>
            <div className="panel panel-default">
                <FormErrors formErrors = {this.state.formErrors} />
            </div>
            <div class="row col-md-6 form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">User Name:</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.state.username} placeholder="Enter username" name="username" onChange={this.handleUserInput}/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">Password:</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" value={this.state.password} placeholder="Enter password" name="password" onChange={this.handleUserInput} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <button className="btn btn-sm btn-primary" onClick={this.handleLogin} disabled={!this.state.formValid}>Login</button>
                    </div>
                </div>
                <small><strong>User name </strong> : admin </small><br />
                <small><strong>Password</strong>  : admin </small>
            </div>
        </div>
    ); 
  }
}

export default LoginForm;
