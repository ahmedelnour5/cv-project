import React, { Component } from 'react';

class ExpViewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { exp } = this.props;

    return (
      <div className="expItem">
        <div className="itemHeader">
          <h4>{exp.position}</h4>
          <div className="itemDetails">
            {exp.company}|
            <span className="dates">
              {exp.startDate}-{exp.endDate}
            </span>
          </div>
        </div>
        {exp.description}
      </div>
    );
  }
}

export default ExpViewItem;
