import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imgLoader from '../../utils/imgLoader'
import './NavBar.css'
import { withAuthConsumer } from '../../contexts/AuthStore';
import authService from '../../services/AuthService';
import { withRouter } from 'react-router-dom';


class NavBar extends Component {

  handleLogout = () => {
    authService.logout()
      .then(() => {
        const { history } = this.props;
        this.props.onUserChange({});
        history.push('/login');
      })
  }
  
  render() { 
    const { martinaLogo } = imgLoader
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/martinna-web">
          <img className="Logo" src={martinaLogo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="Search form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="NavList navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="martinna-web/categories">Categories <span className="sr-only">(current)</span></a>
            </li>
            { !user.email && (
              <Fragment>
              <li className="Login nav-item">
                <a className="nav-link" href="martinna-web/register">Register/Login</a>
              </li>
              </Fragment>
            )}
            { user.email && (
              <Fragment>
              <li className="Login nav-item">
                <a className="LoginYes nav-link" href="martinna-web/profile" >Hi {user.name}!</a>
              </li>
              </Fragment>
            )}
          </ul>
          
        </div>
      </nav>
    );
  }
}
 
export default withAuthConsumer(withRouter(NavBar))
