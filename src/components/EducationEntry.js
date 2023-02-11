import { React } from 'react';
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
          name="Major"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.major}
        />
        <Input
          type="text"
          placeholder="School"
          name="School"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.school}
        />
        <Input
          type="text"
          placeholder="Start Date"
          name="Start Date"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.startDate}
        />
        <Input
          type="text"
          placeholder="End Date"
          name="End Date"
          onChange={(e) => onChange(e, id)}
          value={educationEntry.endDate}
        />
        <Input
          type="text"
          placeholder="Description"
          name="Description"
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
