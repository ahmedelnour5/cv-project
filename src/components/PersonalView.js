import React, { Component } from 'react';

class PersonalView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo } = this.props;
    return (
      <header className="viewHeader">
        <div className="pdHeading">
          <h1 className="nameHeader">{personalInfo.name}</h1>
          <h2 className="titleHeader">{personalInfo.title}</h2>
        </div>
        <div className="pdDetails">
          <ul className="detailsList">
            <li>{personalInfo.number}</li>
            <li>{personalInfo.email}</li>
            <li>{personalInfo.location}</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default PersonalView;
