import React from 'react';
import Item from './Item';

class Main extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    destroy: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
  }
  render() {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.todos.map((todo, index) => (<Item todo={todo} key={index} onDestroy={this.props.destroy} onChange={this.props.onChange}/>))}
        </ul>
      </section>
    );
  }
}

export default Main;
