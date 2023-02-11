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
      id,
      emptyCv,
      onChangePersonal,
      onChangeExperience,
      onDeleteExperience,
      onAddExperience,
      onChangeEdu,
      onDeleteEdu,
      onAddEdu,
    } = this.props;

    return (
      <form className="cvForm">
        <PersonalDetails
          pdEntry={emptyCv.personal}
          onChange={onChangePersonal}
        />
        <WorkExp
          id={emptyCv.experience.id}
          onChange={onChangeExperience}
          onDelete={onDeleteExperience}
          onAdd={onAddExperience}
          workExp={emptyCv.experience}
        />
        <Education
          id={emptyCv.education.id}
          onChange={onChangeEdu}
          onDelete={onDeleteEdu}
          onAdd={onAddEdu}
          educationp={emptyCv.education}
        />
      </form>
    );
  }
}

export default Form;
