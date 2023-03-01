import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { onDelete, onAdd } = this.props;

    return (
      <div className="btn-group">
        <button className="Btns Delete" onClick={onDelete}>
          Delete
        </button>
        <button className="Btns Add" onClick={onAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default Buttons;
