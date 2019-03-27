import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  state = { comments: [] };
  componentDidMount() {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?tags=comment,story_${
          this.props.objectID
        }`
      )
      .then(response =>
        this.setState({
          comments: response.data.hits
        })
      );
  }

  render() {
    const comments = this.state.comments;
    if (comments.length === 0) {
      return (
        <div className="w-100 d-flex justify-content-center">
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </div>
      );
    }
    return (
      <>
        {comments.map(comment => (
          <div className="card mb-3" key={comment.created_at_i}>
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
        ))}
      </>
    );
  }
}

export default Comment;
