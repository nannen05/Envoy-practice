// blog.js

import React from 'react';

const newsData = [
    {
        title: "The Weinstein Co Lets Envoy Loose on Sin City 2",
        articleDate: "May 1, 2013",
        link: "#"
    },
    {
        title: "5.11 Taps Envoy as New Digital Agency",
        articleDate: "May 1, 2013",
        link: "#"
    },
    {
        title: "Pear Breaks Ground on Ground Breaking App",
        articleDate: "May 1, 2013",
        link: "#"
    }
]

class NewsItem extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
      return <div className="component-news__item">
                  <div className="col s12 m4">
                      <div className="header-wrapper">
                          <h2 className="white-text">{this.props.data.title}</h2>
                      </div>
                      <div className="content-wrapper">
                        <p className="grey-text">{this.props.data.articleDate}</p>
                      </div>
                      <div className="cta-wrapper">
                        <a href={this.props.data.link} className="cta cta-main">View Project</a>
                      </div>
                  </div>
              </div>
    }
}

class News extends React.Component {
  constructor(props){
      super(props);
  }

  render() {

    let NewsList = newsData.map(function(item, i) {
        return <NewsItem data={item} key={i}/>
    })

    return <section>
              <div className="container">
                  <div className="row">
                      <div className="col s12">
                          <div className="component component-news">
                              <div className="component-news__wrapper">
                                  <div className="component-header">
                                      <h4>
                                          Wire
                                      </h4>
                                      <a href="#" className="cta cta-main text-uppercase">View All News</a>
                                  </div>
                                  <div className="component-news__content">
                                      <div className="row">
                                          {NewsList}
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

export default News;
