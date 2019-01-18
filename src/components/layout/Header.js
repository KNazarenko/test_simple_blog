import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/github-logo-invert.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div className="container col-md-8 col-xl-6 justify-content-between">
          <a
            href="https://github.com/KNazarenko/KNazarenko.github.io"
            className="navbar-brand"
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="KNazarenko.github.io"
            />
            <span className="appName">Blog</span>
          </a>

          <div>
            <ul className="nav justify-content-end text-warning">
              <li className="nav-item">
                <Link to="/" className="nav-link navLink text-warning">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/add" className="nav-link navLink text-warning">
                  Add post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
