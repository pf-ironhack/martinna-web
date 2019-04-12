import React, { Component } from 'react'
import authService from '../../services/AuthService';
import { Redirect, Link } from 'react-router-dom';
import { withAuthConsumer } from '../../contexts/AuthStore'
import './Login.css'

const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/i;

const validators = {
  email: (value) => {
    let error;
    if (!value || value === '') {
      error = 'Email is required';
    } else if (!emailPattern.test(value)) {
      error = 'Invalid email format'; 
    }
    return error;
  },
  password: (value) => {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (!value.length >= 8) {
      error = 'Password must contains at least 8 characters';
    }
    return error;
  }
}
 
class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {},
    touch: {},
    authenticated: false
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.hasErrors()) {
      authService.authenticate(this.state.user)
      .then(
        (user) => {
          this.setState({ authenticated: true });
          this.props.onUserChange(user);
        },
        (error) => {
          const { message, errors } = error.response.data;
          this.setState({
            errors: {
              ...this.state.errors,
              ...errors,
              password: message
            }
          })
        }
      )
    }
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name] && validators[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  hasErrors = () => Object.keys(this.state.user)
    .some(attr => validators[attr] && validators[attr](this.state.user[attr]))
  
  render() {
    const { touch, errors, user } = this.state;
    if (this.state.authenticated) {
      return (<Redirect to="/" />);
    } else {
      return (
        
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="RegisterTitle">
                <p>Log-in</p>
              </div>

              <div className="DescriptionRegister">
                <p>Do you already have an account?</p>
              </div>

              <div className="LoginEmail input-group mb-2">
                <input type="text" className={`form-control ${touch.email && errors.email && 'is-invalid'}`} name="email" placeholder="Email" onChange={this.handleChange} value={user.email} onBlur={this.handleBlur} />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
              
              <div className="LoginPass input-group mb-2">
                <input type="password" className={`form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur}/>
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <div className="from-actions">
                <button type="submit" className="ButtonRegister btn btn-block" disabled={this.hasErrors()}>Log-in</button>
              </div>
            </form>
            <hr />
            <p className="text-center">Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        
      );
    }
  }
}
export default withAuthConsumer(Login);