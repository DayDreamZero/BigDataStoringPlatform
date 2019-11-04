import React, { Component } from 'react';
import AuditForm from './components';

export default class AuditSubUserOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-sub-user-page">
        <AuditForm />
      </div>
    );
  }
}