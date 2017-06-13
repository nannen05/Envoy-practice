// slider.js

import React from 'react';

const SliderData = [
    {
        title: "The Iphone Unchained.",
        titleColor: "red",
        description: "Tarantino’s outrageous film Djano Unchained needed an equally in your face mobile experience. Bloody good awesomeness ensued.",
        imageUrl: "images/django.png",
        link: "#",
        position: "top-left"
    },
    {
        title: "SAY HELLO TO THE future of vizio",
        titleColor: "red",
        description: "When Vizio needed to pull the wrap off its new family of PCs they called on Envoy to conceptualize, direct and produce a series of short product films.",
        imageUrl: "images/vizio.png",
        link: "#",
        position: "top-right"
    },
    {
        title: "WORLD MEET ULTRA. ULTRA MEET WORLD.",
        titleColor: "blue",
        description: "Asked to launch T-Mobile’s new internationally-minded brand, Ultra Mobile, we created a campaign that’s creativity knows no borders",
        imageUrl: "images/data.png",
        link: "#",
        position: "top-left"
    },

]

class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

      let sliderPosition = "slider-position slider-position__" + this.props.data.position;
      let titleColor = "header-" + this.props.data.titleColor;
      let linkColor = "link-" + this.props.data.titleColor;

      return <div className="component-slider__item">
                  <div className="image-wrapper">
                      <img src={this.props.data.imageUrl}/>
                  </div>
                  <div className="component-slider__wrapper">
                      <div className="container">
                        <div className={sliderPosition}>
                          <div className="header-wrapper">
                              <h2 className={titleColor}>{this.props.data.title}</h2>
                          </div>
                          <div className="content-wrapper">
                            <p>{this.props.data.description} <a className={linkColor} href={this.props.data.link}>View Project</a></p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
    }
}

class Slider extends React.Component {
  constructor(props){
      super(props);
  }

  componentDidMount() {
    $(".owl-carousel").owlCarousel({
	    items: 1,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText: ["",""],
	    dots: true
    });
  }

  render() {

    let sliderList = SliderData.map(function(item, i) {
        return <SliderItem data={item}/>
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

export default Slider;
