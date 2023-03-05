import React, { Component } from 'react';

class EduViewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { edu } = this.props;
    return (
      <div className="expItem">
        <div className="itemHeader">
          <h4>{edu.major}</h4>
          <div className="itemDetails">
            {edu.school}|
            <span className="dates">
              {edu.startDate}-{edu.endDate}
            </span>
          </div>
        </div>
        {edu.description}
      </div>
    );
  }
}

export default EduViewItem;
