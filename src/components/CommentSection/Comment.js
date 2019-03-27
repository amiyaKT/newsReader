import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    const comment = this.props.comment;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{comment.author}</h5>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: comment.comment_text }}
          />
        </div>
        <div className="card-footer">
          <div>
            Posted On: {new Date(comment.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    );
  }
}
