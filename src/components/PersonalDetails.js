import React, { Component } from 'react';
import Header from './Header';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, onChange, pdEntry } = this.props;
    return (
      <section className="personalDetsEntry">
        <Header title="Personal Details" />
        <div className="entryContainer pdEntry">
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="Name"
            placeHolder="Name"
            value={pdEntry.name}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="Title"
            placeHolder="Title"
            value={pdEntry.title}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="Phone Number"
            placeHolder="Phone Number"
            value={pdEntry.phoneNumber}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Email"
            name="Email"
            placeHolder="Email"
            value={pdEntry.email}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="Location"
            placeHolder="Location"
            value={pdEntry.Location}
          />
          <textarea
            className="pdArea"
            onChange={(e) => onChange(e)}
            type="text"
            name="Summary"
            placeholder="Summary"
            value={pdEntry.summary}
          />
        </div>
      </section>
    );
  }
}
export default PersonalDetails;
