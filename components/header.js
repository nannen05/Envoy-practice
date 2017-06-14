// header.js

import React from 'react';

class Header extends React.Component {
  constructor(props){
      super(props);
  }

  componentDidMount() {
      $(".button-collapse").sideNav({
          edge: 'right',
      });
  }

  render() {

    return <nav>
            <div className="nav-wrapper component component-header-main">
              <div className="container">
                <a href="#" className="brand-logo"><img src="images/logo.png"/></a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="hide-on-med-and-down">
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Ventures</a></li>
                  <li><a className="active" href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Ventures</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
                <div className="component component-twitter right">
                    <div className="component-twitter__content">
                        <img src="images/twitter.png"/>
                        <p><span>Tweet Tweet.</span></p>
                        <div className="square-button"></div>
                    </div>
                </div>
              </div>
            </div>
          </nav>

  }
}

export default Header;
