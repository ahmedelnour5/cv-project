import React, { Component } from 'react';
import Input from './Input';
import Buttons from './Buttons';

class EducationEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, onChange, onDelete, onAdd, educationEntry } = this.props;

    return (
      <div className="entryContainer eduEntry">
        <Input
          type="text"
          placeholder="Major"
          name="major"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.major}
        />
        <Input
          type="text"
          placeholder="School"
          name="school"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.school}
        />
        <Input
          type="text"
          placeholder="Start Date"
          name="startDate"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.startDate}
        />
        <Input
          type="text"
          placeholder="End Date"
          name="endDate"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.endDate}
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.description}
        />
        <Buttons
          onDelete={(e) => onDelete(e, id)}
          onAdd={(e) => onAdd(e, id)}
        />
      </div>
    );
  }
}

export default EducationEntry;
