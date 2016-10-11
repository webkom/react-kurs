import React from 'react';

class Item extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    onDestroy: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  handleOnChange(event) {
    this.props.onChange(this.props.todo);
  }

  render() {
    const {todo} = this.props;
    console.log(this.props);
    return (
        <li>
          <input
            className='toggle'
            type='checkbox'
            onChange={this.handleOnChange.bind(this)}
            checked={todo.done}
          />
          <label>
            {todo.text}
          </label>
          <button className='destroy' onClick={this.props.onDestroy.bind(null, todo)}/>
        </li>
    );
  }
}

export default Item;
