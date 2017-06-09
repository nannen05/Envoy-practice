// header.js

import React from 'react';

class Header extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return <div className="container">
              <div className="flip-container">
                  <a href="#" onClick={this.flipColumns.bind(this)}>Switch Columns</a>
              </div>
              <div className="row">
                <div className={this.state.toggleColumns ? "col s6 push-s6" : "col s6"}>6-1</div>
                <div className={this.state.toggleColumns ? "col s6 pull-s6" : "col s6"}>6-2</div>
              </div>
            </div>
  }
}

export default Header;