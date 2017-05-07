import React from 'react';

class Item extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
    markDone: React.PropTypes.func.isRequired,
    doubleClickEdit: React.PropTypes.func.isRequired,
    editTodo: React.PropTypes.func.isRequired
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };
  markDone = () => {
    this.props.markDone(this.props.todo);
  };

  state = {
    isEdit: false,
    text: this.props.todo.text
  };

  doubleClickEdit = () => {
    this.setState({
      isEdit: true
    });
  };

  classNameSelect = () => {
    let className = '';
    if (this.props.todo.done) {
      className += 'completed ';
    }
    if (this.state.isEdit) {
      className += 'editing';
    }
    return className;
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      text: newProps.todo.text
    });
  }

  componentWillMount() {
    this.setState({
      text: this.props.todo.text
    });
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleEdit = event => {
    if (event.which === 13) {
      this.props.editTodo(this.props.todo, this.state.text);
      this.setState({
        isEdit: false
      });
    }
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={this.classNameSelect()}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.markDone}
            checked={todo.done}
          />
          <label onDoubleClick={this.doubleClickEdit}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.deleteTodo} />
        </div>
        <input
          className="edit"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleEdit}
        />
      </li>
    );
  }
}

export default Item;
