import React, { Component } from 'react';

export default class NewsField extends Component {
  render() {
    const news = this.props.news;
    const selected = this.props.selected;
    let className;
    if (selected) {
      className = 'card mb-3 border-success';
    } else {
      className = 'card mb-3';
    }
    return (
      <div className={className} onClick={this.props.onHandleClick}>
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">Number of Comments: {news.num_comments}</p>
        </div>
        <div className="card-footer text-muted d-flex flex-row justify-content-between">
          <div>Posted On: {new Date(news.created_at).toLocaleDateString()}</div>
          <div>By: {news.author}</div>
        </div>
      </div>
    );
  }
}
