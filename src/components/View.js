import React, { Component } from 'react';
import PersonalView from './PersonalView';
import ExperienceView from './ExperienceView';
import ExpViewItem from './expViewItem';
import EducationView from './EducationView';

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, educations } = this.props;
    return (
      <div className="viewContainer">
        <PersonalView personalInfo={personal} />
        <div>{personal.summary}</div>
        <ExperienceView experience={experience} />
        <EducationView educations={educations} />
      </div>
    );
  }
}

export default View;
