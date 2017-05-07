import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
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
    ],
    sortType: 'all'
  };

  addTodo = text => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          text,
          done: false
        }
      ]
    });
  };

  deleteTodo = todo => {
    const { todos } = this.state;
    todos.splice(todos.indexOf(todo), 1);
    this.setState({
      ...this.state
    });
  };

  markDone = todo => {
    const { todos } = this.state;
    todos.todo.done = !todos.todo.done;
    this.setState({
      ...this.state,
      todos
    });
  };

  checkAll = todo => {
    let { todos } = this.state;
    todos = todos.map(t => {
      t.done = true;
    });
    this.setState({
      ...this.state,
      todos
    });
  };

  changeSortType = sortType => {
    this.setState({
      ...this.state.todos,
      sortType
    });
  };

  filterTodos = () => {
    const tempListe = this.state.todos;
    if (this.state.sortType === 'completed') {
      return tempListe.filter(item => item.done);
    } else if (this.state.sortType === 'all') {
      return tempListe;
    }
    return tempListe.filter(item => !item.done);
  };

  clearCompleted = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(item => !item.done)
    });
  };

  editTodo = (todo, text) => {
    if (text === '') {
      this.deleteTodo();
    }
    const { todos } = this.state;
    const todoChange = todos.find(eachTodo => eachTodo.text === todo.text);
    const i = todos.indexOf(todoChange);
    this.setState({
      todos: (todos[i].text = text)
    });
  };

  render() {
    return (
      <div className="todoapp">
        <Header onSave={this.addTodo} />
        <Main
          todos={this.filterTodos()}
          deleteTodo={this.deleteTodo}
          markDone={this.markDone}
          checkAll={this.checkAll}
          editTodo={this.editTodo}
        />
        <Footer
          todos={this.state.todos}
          sortType={this.state.sortType}
          changeSortType={this.changeSortType}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
