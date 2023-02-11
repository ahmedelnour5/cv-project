import React, { Component } from 'react';
import Input from './Input';
import Buttons from './Buttons';

class WorkExpEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, workExpEntry, onChange, onDelete, onAdd } = this.props;
    return (
      <div className="entryContainer expEntry">
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Company"
          name="Company"
          value={workExpEntry.company}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Position"
          name="Position"
          value={workExpEntry.position}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Start Date"
          name="Start Date"
          value={workExpEntry.startDate}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="End Date"
          name="End Date"
          value={workExpEntry.endDate}
        />
        <Input
          onChange={(e) => onChange(e, id)}
          type="text"
          placeholder="Company"
          name="Company"
          value={workExpEntry.description}
        />
        <Buttons
          onDelete={(e) => onDelete(e, id)}
          onAdd={(e) => onAdd(e, id)}
        />
      </div>
    );
  }
}
export default WorkExpEntry;
