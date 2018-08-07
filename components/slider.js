// slider.js

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

      let sliderPosition = "slider-position slider-position__" + this.props.data.slidePosition;
      let titleColor = "header-red";
      let linkColor = "link-red";

      return <div className="component-slider__item">
                  <div className="image-wrapper">
                      <img src={this.props.data.imageUrl}/>
                  </div>
                  <div className="component-slider__wrapper">
                      <div className="container">
                        <div className={sliderPosition}>
                          <div className="header-wrapper">
                              <h2 className={titleColor}>{this.props.data.slideTitle}</h2>
                          </div>
                          <div className="content-wrapper">
                            <p>{this.props.data.slideCopy} <a className={linkColor} href={this.props.data.link}>View Project</a></p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
    }
}

class Slider extends React.Component {

  componentWillMount() {
      this.props.fetchMainSlider()

      $(".owl-carousel").owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        navText: ["",""],
        dots: true
      });
  }

  componentDidMount() {

  }

  render() {

    let sliderList =  _.map(this.props.data, function(value, key) {
			return <SliderItem data={value} key={key}/>
		})

    return <section>
              <div className="component component-slider">
                  <div className="component-slider__content">
                      <div className="owl-carousel owl-theme">
                          {sliderList}
                      </div>
                  </div>
              </div>
    	   </section>

  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Slider);
