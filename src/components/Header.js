import React, { Component, PropTypes } from 'react';

class Header extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleKeyDown(event) {
    if (event.which === 13) {
      const text = event.target.value.trim();
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <header>
        <h1>Todo</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus='true'
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)} />
      </header>
    );
  }
}

export default Header;
