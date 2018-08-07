// blog.js

import React from 'react';
import { databaseRef } from "../firebase/firebase";

const featuredWorkRef = databaseRef.ref('flamelink/environments/production/content/featuredWork/en-US');

const blogData = [
    {
        title: "Boost Mobile",
        category: "ReBrand",
        description: "Boost Mobile recognized the need to elevate and refresh its brand to speak to a broader audience. The result was an evolved logo, ...",
        imageUrl: "images/boost.png",
        link: "#"
    },
    {
        title: "Pear Sports",
        category: "Trainging Portal",
        description: "Pear Sports revolutionary training systems and fitness apps were getting lost in a crowded marketplace. Envoy rebuilt the story and ... ",
        imageUrl: "images/run.png",
        link: "#"
    },
    {
        title: "5.11",
        category: "Ultimate Training Experience",
        description: "5.11, the industry leader in tactical gear turned to Envoy to bring their “Ultimate Training Challenge” to life in the digital space ...",
        imageUrl: "images/ready.png",
        link: "#"
    }
]

class BlogItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
      return <div className="component-blog__item">
                  <div className="col s12 m4">
                      <div className="image-wrapper">
                          <img src={this.props.data.imageUrl}/>
                      </div>
                      <div className="header-wrapper">
                          <h5 className="white-text">{this.props.data.title} <span className="lightblue-text">{this.props.data.category}</span></h5>
                      </div>
                      <div className="content-wrapper">
                        <p className="grey-text">{this.props.data.description}</p>
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

      this.state = {
          featuredWork: ""
      }
  }

  componentWillMount() {


      console.log(this.state)
  }

  componentDidMount() {
    featuredWorkRef
      .once('value')
      .then(data => {
          let mainSlider = data.val() || []
          this.setState({featuredWork: mainSlider})
      })
  }

  render() {

    let blogList = blogData.map(function(item, i) {
        return <BlogItem data={item} key={i}/>
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
