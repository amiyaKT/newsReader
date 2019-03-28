import React, { Component } from 'react';

import Comment from '../CommentSection/Comment';

class TabContent extends Component {
  state = {
    showMore: false
  };

  render() {
    const ID = this.props.idval;
    const ariaLabelledBy = `${this.props.idval}-tab`;

    return (
      // News Section
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
          {this.state.showMore ? (
            // display iframe
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={this.props.item.url}
                title={this.props.item.objectID}
                allowFullScreen
              />
            </div>
          ) : (
            // Display button which shows iframe
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ showMore: true })}
            >
              Read More
            </button>
          )}
        </div>

        {/* Comments section */}
        {this.props.item.num_comments > 0 ? (
          <div className="mt-3">
            <h2>Comments Section:</h2>
            <Comment objectID={this.props.item.objectID} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default TabContent;
