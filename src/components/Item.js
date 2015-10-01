import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Item extends Component {
  static propTypes = {
    changeStatus: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
  };

  onStatusChange(event) {
    this.props.changeStatus(this.props.todo, event.target.checked);
  }

  render() {
    const { todo } = this.props;

    return (
      <li className={classNames({ completed: todo.done })}>
        <input
          className='toggle'
          type='checkbox'
          onChange={this.onStatusChange.bind(this)}
          checked={todo.done} />

        <label>
          {todo.text}
        </label>
      </li>
    );
  }
}

export default Item;
