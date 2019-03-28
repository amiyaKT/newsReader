import React, { Component } from 'react';
import { connect } from 'react-redux'; // link react with redux
import { fetchNews } from '../../actions'; // import fetchNews action creator
import { Link } from 'react-router-dom'; // import <Link> to redirect

import NewsField from './NewsField'; // import NewsField Component

class NewsList extends Component {
  state = {
    selectedList: []
  };

  // Fetch all news when the application starts
  componentDidMount() {
    this.props.fetchNews();
  }

  // Update the selectedList state when user clicks on a newsField.
  onClick = news => {
    if (this.state.selectedList.find(list => list.objectID === news.objectID)) {
      // If the currently clicked news is already in the selected list then remove it from selectedList
      this.setState(state => {
        const selectedList = state.selectedList.filter(
          item => item.objectID !== news.objectID
        );
        return { selectedList };
      });
    } else {
      // If the currently clicked news is not in the selected list then add it to selectedList
      this.setState(state => {
        const selectedList = [...state.selectedList, news];
        return { selectedList };
      });
    }
  };

  render() {
    return (
      <div className="w-100 h-100">
        {/* If there are news then display them else display loader */}
        {this.state.selectedList.length > 0 ? (
          // Redirect to /selectedList.
          <Link
            // pass selected list to ShowSelectedNews field
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
            // Display each NewsField
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
          // Display Loader
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

// map redux state to props
const mapStateToProps = state => ({
  news: state.news
});

// connect with redux and export NewsList component
export default connect(
  mapStateToProps,
  { fetchNews }
)(NewsList);
