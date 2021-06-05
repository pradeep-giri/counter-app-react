/** @format */

import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, counter, onDelete } = this.props;

    return (
      <div>
        <span className={this.getBudgeClassess()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-success btn-sm m-2 p-2'>
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-secondary btn-sm m-2 p-2'>
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className='btn btn-danger btn-sm m-2 p-2'>
          Delete
        </button>
      </div>
    );
  }

  getBudgeClassess() {
    let classes = "badge m-2 p-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
