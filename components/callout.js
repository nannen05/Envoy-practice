// callout.js

import React from 'react';

class Callout extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return <section>
              <div className="container">
                  <div className="row">
                      <div className="col s12">
                          <div className="component component-callout">
                              <div className="component-callout__wrapper">
                                  <div className="component-callout__title">
                                      <h2 className="white-text">
                                          An independent full service creative agency helping brave brands build businesses and be heard in a world full of noise. <span className="secondary-color">We are Envoy.</span>
                                      </h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
  }
}

export default Callout;