// header.js

import React from 'react';

class Header extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return <nav>
              <div className="container">
                  <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><a href="sass.html">Sass</a></li>
                      <li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                  </div>
              </div>
           </nav>
  }
}

export default Header;