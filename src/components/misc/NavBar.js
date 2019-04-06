import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imgLoader from '../../utils/imgLoader'

class NavBar extends Component {
  
  render() { 
    const { martinaLogo } = imgLoader
    console.info('LOADER => ', imgLoader)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={martinaLogo} alt="Logo" />;
        {/* <a className="navbar-brand" href="#">Martina.</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Categories <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login/Register</a>
            </li>
          </ul>
          
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;