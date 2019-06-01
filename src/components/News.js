import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsFeed } from "../actions/news.actions";

class News extends Component {
  componentDidMount() {
    console.log("news", this.props);
  }
  render() {
    return (
      <div>
        {this.props.news && this.props.news.map(feed => <p>{feed.author}</p>)}
        <button onClick={this.props.getNewsFeed}>NewsFeed</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.newsFeeds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsFeed: () => dispatch(getNewsFeed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
