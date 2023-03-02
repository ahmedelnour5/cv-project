import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        title: '',
        phoneNumber: '',
        email: '',
        location: '',
        summary: '',
      },
      experience: {
        id: uniqid(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      education: {
        id: uniqid(),
        major: '',
        school: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      experiences: [
        {
          id: uniqid(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
      educations: [
        {
          id: uniqid(),
          major: '',
          school: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    };

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onAddExperience = this.onAddExperience.bind(this);
    this.onDeleteExperience = this.onDeleteExperience.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onAddEducation = this.onAddEducation.bind(this);
    this.onDeleteEducation = this.onDeleteEducation.bind(this);
  }

  handleChangePersonal(e) {
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        personal: {
          ...prevState.personal,
          [name]: value,
        },
      }),
      () => console.log(this.state)
    );
  }

  onChangeExperience = (e, id, prevState) => {
    const { name, value } = e.target;
    const { experiences } = this.state;
    const updatedExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    this.setState({ experiences: [...updatedExperiences] });
  };

  onAddExperience = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences,
        {
          id: uniqid(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  onDeleteExperience = (e, id) => {
    e.preventDefault();
    const { value, name } = e.target;
    const { experiences } = this.state;
    const updatedExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    this.setState({ experiences: [...updatedExperiences] });
  };

  onChangeEducation = (e, id) => {
    const { name, value } = e.target;
    const { educations } = this.state;
    const updatedEdus = educations.map((education) => {
      if (education.id === id) {
        return { ...education, [name]: value };
      }
      return education;
    });
    this.setState({ educations: [...updatedEdus] });
  };

  onAddEducation = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations,
        {
          id: uniqid(),
          major: '',
          school: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };
  onDeleteEducation = (e, id) => {
    e.preventDefault();
    const { educations } = this.state;
    const updatedEducations = educations.filter(
      (education) => education.id !== id
    );
    this.setState({ educations: [...updatedEducations] });
  };

  render() {
    const { personal, experiences, educations } = this.state;
    return (
      <div className="cvContainer">
        <div className="formContainer">
          <Form
            personal={personal}
            onChangePersonal={this.handleChangePersonal}
            experienceList={experiences}
            onChangeExperience={this.onChangeExperience}
            onAddExperience={this.onAddExperience}
            onDeleteExperience={this.onDeleteExperience}
            eduList={educations}
            onChangeEdu={this.onChangeEducation}
            onAddEdu={this.onAddEducation}
            onDeleteEdu={this.onDeleteEducation}
          />
        </div>
      </div>
    );
  }
}

export default App;
