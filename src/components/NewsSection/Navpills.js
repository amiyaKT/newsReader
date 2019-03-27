import React, { Component } from 'react';

export default class Navpills extends Component {
  render() {
    const ariaControls = this.props.idval;
    const ID = `${this.props.idval}-tab`;
    const href = `#${this.props.idval}`;
    const selected = this.props.selected;
    return (
      <a
        className={this.props.classNames}
        id={ID}
        data-toggle="pill"
        href={href}
        role="tab"
        aria-controls={ariaControls}
        aria-selected={selected}
      >
        {this.props.title}
      </a>
    );
  }
}
