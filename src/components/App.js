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
        text: 'Spis Pizza',
        done: true
      }
    ],
    filterType: 'all'
  }

  addTodo(text) {
    const newTodo = {text: text, done: false};

    this.setState({
      ...this.state,
      todos: [
        newTodo,
        ...this.state.todos
      ]
    });
  }

  deleteTodo(todo) {
    const newtodos = this.state.todos.filter((elem) => (elem !== todo));
    this.setState({
      ...this.state,
      todos: newtodos
    });
  }

  toogleDone(todo) {
    const newtodos = this.state.todos.map((t) => {
      if (t === todo) {
        t.done = !t.done;
      }
      return (t);
    });
    this.setState({
      ...this.state,
      todos: newtodos
    });
  }
  filterTodos = () => {
    return this.state.todos.filter((todo) => {
      if (this.state.filterType === 'completed' && todo.done === true) {
        return true;
      } else if (this.state.filterType === 'active' && todo.done === false) {
        return true;
      } else if (this.state.filterType === 'all') {
        return true;
      } return false;
    });
  }
  changeFilterType = (filtertype) => {
    this.setState({
      ...this.state,
      filterType: filtertype
    });
  }
  getCount = () => {
    const notCompleted = this.state.todos.filter((todo) => (todo.done === false));
    return (notCompleted.length);
  }
  getCompleted = () => {
    const Completed = this.state.todos.filter((todo) => (todo.done === true));
    if (Completed === null) {
      return (0);
    }
    return (Completed.length);
  }
  clearCompleted = () => {
    const newtodos = this.state.todos.filter((elem) => (elem.done === false));
    this.setState({
      ...this.state,
      todos: newtodos
    });
  }
  render() {
    return (
      <div className='todoapp'>
      {console.log(this.state.filterType)}
        <Header onSave={this.addTodo.bind(this)}/>
        <Main todos={this.filterTodos()}
        destroy={this.deleteTodo.bind(this)}
        onChange={this.toogleDone.bind(this)}
        />
        <Footer changeFilterType={this.changeFilterType}
        filterType={this.state.filterType}
        getCount={this.getCount}
        clearCompleted={this.clearCompleted}
        getCompleted={this.getCompleted}
        />
      </div>
    );
  }
}

export default App;
