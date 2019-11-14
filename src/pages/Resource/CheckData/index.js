import React, { Component } from 'react';
import CheckData from './components';

export default class CheckDataOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-sub-user-page">
        <CheckData />
      </div>
    );
  }
}