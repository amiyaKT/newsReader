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
    if (this.state.selectedList.find(list => list.objectID === news.objectID)) {
      this.setState(state => {
        const selectedList = state.selectedList.filter(
          item => item.objectID !== news.objectID
        );
        return { selectedList };
      });
    } else {
      this.setState(state => {
        const selectedList = _.uniqBy(
          [...state.selectedList, news],
          'objectID'
        );
        return { selectedList };
      });
    }
  };

  render() {
    return (
      <div className="w-100 h-100">
        {this.state.selectedList.length > 0 ? (
          <Link
            to={{
              pathname: '/selectedList',
              state: { selectedList: this.state.selectedList }
            }}
            className="btn btn-primary mx-auto d-block mb-3"
          >
            Show Selected List
          </Link>
        ) : null}

        {this.props.news ? (
          this.props.news.map(news => (
            <NewsField
              key={news.objectID}
              news={news}
              onHandleClick={() => this.onClick(news)}
              selected={this.state.selectedList.find(
                selectedNews => selectedNews.objectID === news.objectID
              )}
            />
          ))
        ) : (
          <div className="w-100 d-flex justify-content-center">
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
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
