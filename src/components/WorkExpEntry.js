import React, { Component } from 'react';
import Input from './Input';
import Buttons from './Buttons';

class WorkExpEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, experience, onChange, onDelete, onAdd } = this.props;
    return (
      <div className="entryContainer expEntry">
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Company"
          name="company"
          value={experience.company}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Position"
          name="position"
          value={experience.position}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Start Date"
          name="startDate"
          value={experience.startDate}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="End Date"
          name="endDate"
          value={experience.endDate}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Description"
          name="description"
          value={experience.description}
        />
        <Buttons onDelete={(e) => onDelete(e, id)} onAdd={onAdd} />
      </div>
    );
  }
}
export default WorkExpEntry;
