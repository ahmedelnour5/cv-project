import React, { Component } from 'react';
import Header from './Header';
import Input from './Input';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, pdEntry } = this.props;
    return (
      <section className="personalDetsEntry">
        <Header title="Personal Details" />
        <div className="entryContainer pdEntry">
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="name"
            placeholder="Name"
            value={pdEntry.name}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="title"
            placeholder="Title"
            value={pdEntry.title}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={pdEntry.phoneNumber}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Email"
            name="email"
            placeholder="Email"
            value={pdEntry.email}
          />
          <Input
            onChange={(e) => onChange(e)}
            type="Text"
            name="location"
            placeholder="Location"
            value={pdEntry.location}
          />
          <textarea
            className="pdArea"
            onChange={(e) => onChange(e)}
            type="text"
            name="summary"
            placeholder="Summary"
            value={pdEntry.summary}
          />
        </div>
      </section>
    );
  }
}
export default PersonalDetails;
