import React, { Component } from 'react';
import EducationEntry from './EducationEntry';
import Header from './Header';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, onChange, onDelete, onAdd, education } = this.props;

    const educationList = education.map((educationEntry) => (
      <EducationEntry
        key={educationEntry.id}
        id={educationEntry.id}
        educationEntry={educationEntry}
        onChange={onChange}
        onDelete={onDelete}
        onAdd={onAdd}
      />
    ));
    return (
      <section className="eduSection">
        <Header title="Education" />
        {educationList}
      </section>
    );
  }
}

export default Education;
