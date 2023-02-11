import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return <h2 className="sectionHeader">{title}</h2>;
  }
}

export default Header;
