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

  render() {
    return (
      <div className='todoapp'>
        <Header onSave={this.addTodo.bind(this)} />
        <Main todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
