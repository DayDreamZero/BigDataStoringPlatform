import React, { Component } from 'react';
import SearchPanel from './components';


export default class SearchOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-sub-user-page">
        <SearchPanel />
      </div>
    );
  }
}
