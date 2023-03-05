import React, { Component } from 'react';
import EduViewItem from './EduViewItem';

class EducationView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educations, id } = this.props;
    const educationList = educations.map((education) => (
      <EduViewItem key={education.id} id={education.id} edu={education} />
    ));
    return (
      <div className="expView">
        <h3>Education</h3>
        {educationList}
      </div>
    );
  }
}

export default EducationView;
