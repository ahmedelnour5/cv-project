import React, { Component } from 'react';
import WorkExpEntry from './WorkExpEntry';
import Header from './Header';

class WorkExp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, onChange, onDelete, workExp, onAdd } = this.props;

    const workExpList = workExp.map((workExpItem) => (
      <WorkExpEntry
        key={workExpItem.id}
        workExpEntry={workExpItem}
        onChange={onChange}
        onDelete={onDelete}
        onAdd={onAdd}
      />
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
