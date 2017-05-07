import React from 'react';

class Footer extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    sortType: React.PropTypes.string.isRequired,
    changeSortType: React.PropTypes.func.isRequired,
    clearCompleted: React.PropTypes.func.isRequerd
  };

  render() {
    const { todos, sortType } = this.props;
    const filters = ['all', 'active', 'completed'];
    const asd = filters.map(elem => (
      <li>
        <a
          href={'#/' + elem}
          className={sortType === elem ? 'selected' : ''}
          onClick={this.props.changeSortType.bind(null, elem)}
        >
          {elem}
        </a>
      </li>
    ));

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter(item => !item.done).length}</strong>
          <span> </span>
          <span> item </span>
          <span> left </span>
        </span>

        <ul className="filters">
          {asd}
        </ul>
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
