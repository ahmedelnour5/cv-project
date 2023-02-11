import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { handleDelete, handleAdd } = this.props;

    return (
      <div className="btn-group">
        <button className="Btns Delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="Btns Add" onClick={handleAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default Buttons;
