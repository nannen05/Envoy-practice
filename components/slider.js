// slider.js

import React from 'react';

const SliderData = [
    {
        title: "The Iphone Unchained",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience.",
        imageUrl: "https://d3ciwvs59ifrt8.cloudfront.net/0f85269b-d32e-41c5-8859-fa3f391e0897/24a15f21-c96a-42d4-9128-6509480fbb25_h.png",
        link: "#",
        position: "bottom-left"
    },
    {
        title: "The Iphone Unchained",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience.",
        imageUrl: "https://d3ciwvs59ifrt8.cloudfront.net/0f85269b-d32e-41c5-8859-fa3f391e0897/24a15f21-c96a-42d4-9128-6509480fbb25_h.png",
        link: "#",
        position: "bottom"
    },
    {
        title: "The Iphone Unchained",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience.",
        imageUrl: "https://d3ciwvs59ifrt8.cloudfront.net/0f85269b-d32e-41c5-8859-fa3f391e0897/24a15f21-c96a-42d4-9128-6509480fbb25_h.png",
        link: "#",
        position: "bottom-right"
    },
    {
        title: "The Iphone Unchained",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience.",
        imageUrl: "https://d3ciwvs59ifrt8.cloudfront.net/0f85269b-d32e-41c5-8859-fa3f391e0897/24a15f21-c96a-42d4-9128-6509480fbb25_h.png",
        link: "#",
        position: "bottom-right"
    }

]

class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

      let sliderPosition = "slider-position slider-position__" + this.props.data.position;

      return <div className="component-slider__item">
                  <div className="image-wrapper">
                      <img src={this.props.data.imageUrl}/>
                  </div>
                  <div className="component-slider__wrapper">
                      <div className="container">
                        <div className={sliderPosition}>
                          <div className="header-wrapper">
                              <h2>{this.props.data.title}</h2>
                          </div>
                          <div className="content-wrapper">
                            <p>{this.props.data.description}</p>
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
