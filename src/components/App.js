import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import ShowSelectedNews from './NewsSection/ShowSelectedNews';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/selectedList"
            render={props => <ShowSelectedNews {...props} isAuthed={true} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
