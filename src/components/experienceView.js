import React, { Component } from 'react';
import ExpViewItem from './expViewItem';
import expViewItem from './expViewItem';

class ExperienceView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience, id } = this.props;
    const experienceList = experience.map((item) => (
      <ExpViewItem id={item.id} key={item.id} exp={item} />
    ));

    return (
      <div className="expView">
        <h3>Work Experience</h3>
        {experienceList}
      </div>
    );
  }
}
export default ExperienceView;
