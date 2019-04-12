import React, { Component } from 'react'
import authService from '../services/AuthService';
import { Redirect, Link } from 'react-router-dom';
import { withAuthConsumer } from '../contexts/AuthStore'
import { withRouter } from 'react-router-dom';
import './Profile.css'

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
 
class Profile extends Component {

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

  handleLogout = () => {
    authService.logout()
      .then(() => {
        const { history } = this.props;
        this.props.onUserChange({});
        history.push('/login');
      })
  }

  hasErrors = () => Object.keys(this.state.user)
    .some(attr => validators[attr] && validators[attr](this.state.user[attr]))
  
  render() {
    const { touch, errors, user } = this.state;
    if (this.state.authenticated) {
      return (<Redirect to="/categories" />);
    } else {
      return (

        <div class="container">
          <div class="row">
            <div class="col-4">
              <div className="BrandDiv">
                <Link className="CreateProduct" to="#">Create Brand</Link>
              </div>
              <div className="ProfileNav">
                <div className="">
                  <Link className="MyProfile" to="/profile">My Profile</Link>
                </div>
                <div className="LogOutDiv">
                  <Link className="LogOut" onClick={this.handleLogout} to="/logout">Logout</Link>
                </div>
              </div>
            </div>
            
            <div class="col-8">
              <form onSubmit={this.onSubmit}>
                <div className="ProfileTitle">
                  <p>My Profile</p>
                </div>

                <div className="ProfileNameDiv input-group mb-2">
                  <input type="text" className={`ProfileName form-control ${touch.name && errors.name && 'is-invalid'}`} name="name" placeholder="Name" onChange={this.handleChange} value={user.name} onBlur={this.handleBlur} />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>

                <div className="ProfileEmailDiv input-group mb-2">
                  <input type="text" className={`ProfileEmail form-control ${touch.email && errors.email && 'is-invalid'}`} name="email" placeholder="Email" onChange={this.handleChange} value={user.email} onBlur={this.handleBlur} />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                
                <div className="ProfilePassDiv input-group mb-2">
                  <input type="password" className={`ProfilePass form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur}/>
                  <div className="invalid-feedback">{errors.password}</div>
                </div>

                <div className="from-actions">
                  <button type="submit" className="ButtonProfile btn btn-block" disabled={this.hasErrors()}>Edit Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        
      );
    }
  }
}
export default withAuthConsumer(withRouter(Profile));