import React, { Component } from 'react';

class PersonalView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo } = this.props;
    return (
      <header className="viewHeader">
        <div className="headingContainer">
          <h1 className="nameHeading">{personalInfo.name}</h1>
          <h2 className="titleHeading">{personalInfo.title}</h2>
        </div>
        <div className="pdContact">
          <ul className="contactList">
            <li>{personalInfo.phoneNumber}</li>
            <li>{personalInfo.email}</li>
            <li>{personalInfo.location}</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default PersonalView;
