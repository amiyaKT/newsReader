import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import NewsField from './NewsField';

class NewsList extends Component {
  state = {
    selectedList: []
  };

  componentDidMount() {
    this.props.fetchNews();
  }

  onClick = news => {
    this.setState(state => {
      const selectedList = _.uniqBy([...state.selectedList, news], 'objectID');
      return { selectedList };
    });
  };

  render() {
    return (
      <div className="w-100 h-100">
        <Link
          to={{
            pathname: '/selectedList',
            state: { selectedList: this.state.selectedList }
          }}
          className="btn btn-primary"
        >
          Show Selected List
        </Link>
        {this.props.news ? (
          this.props.news.map(news => (
            <NewsField
              key={news.objectID}
              news={news}
              onHandleClick={() => this.onClick(news)}
            />
          ))
        ) : (
          <div className="text-center">Loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { fetchNews }
)(NewsList);
