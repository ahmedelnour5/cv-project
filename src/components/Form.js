import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import WorkExp from './WorkExp';
import Education from './Education';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      personal,
      experienceList,
      onChangePersonal,
      onChangeExperience,
      onDeleteExperience,
      onAddExperience,
      onChangeEdu,
      onDeleteEdu,
      onAddEdu,
      eduList,
    } = this.props;

    return (
      <form className="cvForm">
        <PersonalDetails pdEntry={personal} onChange={onChangePersonal} />
        <WorkExp
          onChange={onChangeExperience}
          onDelete={onDeleteExperience}
          onAdd={onAddExperience}
          workExp={experienceList}
        />
        <Education
          onChange={onChangeEdu}
          onDelete={onDeleteEdu}
          onAdd={onAddEdu}
          education={eduList}
        />
      </form>
    );
  }
}

export default Form;
