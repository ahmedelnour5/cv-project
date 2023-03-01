import React, { Component } from 'react';
import PersonalView from './PersonalView';

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal } = this.props;
    return (
      <div className="View">
        <PersonalView personalInfo={personal} />
      </div>
    );
  }
}

export default View;
