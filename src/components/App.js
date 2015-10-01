import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
  state = {
    todos: [
      {
        text: 'Lær alt',
        done: false
      },
      {
        text: 'Vask gulvet!',
        done: false
      },
      {
        text: 'Spis pizza',
        done: true
      }
    ]
  }

  addTodo(text) {
    const newTodo = {
      text,
      done: false
    };

    this.setState({
      todos: [
        newTodo,
        ...this.state.todos
      ]
    });
  }

  changeStatus(markTodo, done) {
    const todos = this.state.todos.map(todo =>
      markTodo !== todo ? todo : {
        ...markTodo,
        done
      }
    );

    this.setState({ todos });
  }

  render() {
    return (
      <div className='todoapp'>
        <Header onSave={this.addTodo.bind(this)} />
        <Main
          changeStatus={this.changeStatus.bind(this)}
          todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
