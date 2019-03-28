import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Components
import Navpills from './Navpills';
import TabContent from './TabContent';

class ShowSelectedNews extends Component {
  render() {
    if (this.props.location.state === undefined) {
      // If no news are selected then return to newsList
      return (
        <div className="w-100 d-flex justify-content-center">
          <Link to="/" className="btn btn-primary mx-auto">
            Return To Menu
          </Link>
        </div>
      );
    } else {
      // If  news are selected then display them
      const selectedList = this.props.location.state.selectedList;
      return (
        <div className="row w-100">
          {/* Shows the list of titles which user has selected */}
          <div className="col-sm-3">
            <h3>Select Title To View</h3>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {selectedList.map((item, i) => {
                let classNames;
                let selected;
                if (i === 0) {
                  classNames = 'nav-link active';
                  selected = true;
                } else {
                  classNames = 'nav-link';
                  selected = false;
                }
                return (
                  <Navpills
                    key={item.objectID}
                    classNames={classNames}
                    idval={`v-pills-${item.objectID}`}
                    selected={selected}
                    title={item.title}
                  />
                );
              })}
            </div>
            <hr className="d-md-none" />
          </div>
          <div className="col-sm-8">
            {/* Shows content of the selected title */}
            <div className="tab-content" id="v-pills-tabContent">
              {selectedList.map((item, i) => {
                let classNames;
                if (i === 0) {
                  classNames = 'tab-pane fade show active';
                } else {
                  classNames = 'tab-pane fade';
                }
                return (
                  <TabContent
                    key={item.objectID}
                    classNames={classNames}
                    idval={`v-pills-${item.objectID}`}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ShowSelectedNews;
