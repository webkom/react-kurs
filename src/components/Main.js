import React from 'react';
import Item from './Item';

class Main extends React.Component {
  render() {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.todos.map((todo, i) => <Item todo={todo} key={i} />)}
        </ul>
      </section>
    );
  }
}

export default Main;
