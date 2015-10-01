import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Item extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li className={classNames({ completed: todo.done })}>
        <input
          className='toggle'
          type='checkbox'
          onChange={() => null} // placeholder
          checked={todo.done} />

        <label>
          {todo.text}
        </label>
      </li>
    );
  }
}

export default Item;
