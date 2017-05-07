import React from 'react';
import Item from './Item';

class Main extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
    markDone: React.PropTypes.func.isRequired,
    checkAll: React.PropTypes.func.isRequired,
    editTodo: React.PropTypes.func.isRequired
  };

  checkAll = () => {
    this.props.checkAll();
  }

  render() {
    const { todos } = this.props;
    return (
      <section className='main'>
        <input
          className='toggle-all'
          type='checkbox'
          onChange={this.checkAll}
        />
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <Item
              todo={todo}
              key={index}
              deleteTodo={this.props.deleteTodo}
              markDone={this.props.markDone}
              checkAll={this.props.checkAll}
              editTodo={this.props.editTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;
