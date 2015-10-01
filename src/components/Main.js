import React, { Component, PropTypes } from 'react';
import Item from './Item';

class Main extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.todos.map((todo, index) => <Item todo={todo} key={index} />)}
        </ul>
      </section>
    );
  }
}

export default Main;
