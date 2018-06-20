import React, { Component } from 'react';
import { NavbarItem } from './';

class Navbar extends Component {

  state = {
    loggedIn: true
  };

  updateExpandedState = () => {
    if (window.matchMedia("(min-width: 700px)").matches) {
      /* the viewport is at least 400 pixels wide */
      this.setState({ sidebarExpanded: true })
    } else {
      /* the viewport is less than 400 pixels wide */
      this.setState({ sidebarExpanded: false })
    }
  }


  render() {
    let navbar;
    const { loggedIn } = this.state
    let navClass;

    if (!window.matchMedia("(min-width: 401px)").matches) {
      /* the viewport is at least 400 pixels wide */
      navClass = 'ml-5';
    }

    if (!loggedIn) {
      navbar =
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className={`navbar-brand ${navClass}`} href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" onClick={ () => this.setState({ loggedIn: !loggedIn })}>
                  < NavbarItem title='Login' />
                </li>
                <li className="nav-item">
                  <NavbarItem title='Register' />
                </li>
              </ul>
            </div>
          </nav>
        </div>
    } else {
      navbar =
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className={`navbar-brand ${navClass}`} href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" onClick={ () => this.setState({ loggedIn: !loggedIn })}>
                  < NavbarItem title='Logout' />
                </li>
                <li className="nav-item">
                  <NavbarItem title='Settings' />
                </li>
              </ul>
            </div>
          </nav>
        </div>
    }
    return (
      navbar
    )
  }
}

export default Navbar;