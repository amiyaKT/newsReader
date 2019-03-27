import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    return <div className="App">App</div>;
  }
}

export default connect(
  null,
  { fetchNews }
)(App);
