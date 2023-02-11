import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, type, placeholder, onChange, value } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      ></input>
    );
  }
}

export default Input;
