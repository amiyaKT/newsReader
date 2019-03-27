import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

import Comment from '../CommentSection/Comment';

class TabContent extends Component {
  state = {
    showMore: false
  };
  componentDidMount() {
    this.props.fetchComments(this.props.item.objectID);
  }

  render() {
    const ID = this.props.idval;
    const ariaLabelledBy = `${this.props.idval}-tab`;
    return (
      <div
        className={this.props.classNames}
        id={ID}
        role="tabpanel"
        aria-labelledby={ariaLabelledBy}
      >
        <div>
          <h1>{this.props.item.title}</h1>
          <p className="lead">
            Posted On:{' '}
            {new Date(this.props.item.created_at).toLocaleDateString()}
          </p>
          <p className="lead">By, {this.props.item.author}</p>
        </div>
        {this.state.showMore ? (
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={this.props.item.url}
              allowFullScreen
            />
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showMore: true })}
          >
            Read More
          </button>
        )}

        {this.props.comments && this.props.item.num_comments > 0 ? (
          <div className="mt-3">
            <h2>Comments Section:</h2>
            {this.props.comments.map(comment => (
              <Comment key={comment.created_at_i} comment={comment} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(TabContent);
