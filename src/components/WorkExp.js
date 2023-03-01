import React, { Component } from 'react';
import WorkExpEntry from './WorkExpEntry';
import Header from './Header';
import uniqid from 'uniqid';

class WorkExp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, onChange, onDelete, workExp, onAdd } = this.props;

    const workExpList = workExp.map((experience) => (
      <WorkExpEntry
        key={experience.id}
        id={experience.id}
        experience={experience}
        onChange={onChange}
        onDelete={onDelete}
        onAdd={onAdd}
      ></WorkExpEntry>
    ));

    return (
      <section className="workExperienceSection">
        <Header title="Work Experience" />
        {workExpList}
      </section>
    );
  }
}

export default WorkExp;
