// blog.js

import React from 'react';

const blogData = [
    {
        title: "Boost Mobile",
        category: "ReBrand",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience. The result was an evolved logo, ...",
        imageUrl: "https://placeimg.com/300/160/tech",
        link: "#"
    },
    {
        title: "Pear Sports",
        category: "Trainging Portal",
        description: "Pear Sports revolutionary training systems and fitness apps were getting lost in a crowded marketplace. Envoy rebuilt the story and ... ",
        imageUrl: "https://placeimg.com/300/160/tech",
        link: "#"
    },
    {
        title: "5.11",
        category: "Ultimate Training Experience",
        description: "5.11, the industry leader in tactical gear turned to Envoy to bring their “Ultimate Training Challenge” to life in the digital space ...",
        imageUrl: "https://placeimg.com/300/160/tech",
        link: "#"
    }
]

class BlogItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
      return <div className="component-blog__item">
                  <div className="col s4">
                      <div className="img-wrapper">
                          <img src="https://placeimg.com/300/160/tech"/>
                      </div>
                      <div className="header-wrapper">
                          <h5 className="white-text">{this.props.data.title} <span>{this.props.data.category}</span></h5>
                      </div>
                      <div className="content-wrapper">
                        <p className="white-text">{this.props.data.description}</p>
                      </div>
                      <div className="cta-wrapper">
                        <a href={this.props.data.link} className="cta cta-main">View Project</a>
                      </div>
                  </div>
              </div>
    }
}

class Blog extends React.Component {
  constructor(props){
      super(props);
  }

  render() {

    let blogList = blogData.map(function(item, i) {
        return <BlogItem data={item}/>
    })

    return <section>
              <div className="container">
                  <div className="row">
                      <div className="col s12">
                          <div className="component component-blog">
                              <div className="component-blog__wrapper">
                                  <div className="component-header">
                                      <h4>
                                          Featured Work
                                      </h4>
                                      <a href="#" className="cta cta-main text-uppercase">View All Work</a> 
                                  </div>
                                  <div className="component-blog__content">
                                      <div className="row">
                                          {blogList}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
  }
}

export default Blog;