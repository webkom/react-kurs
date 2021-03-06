import React from 'react';

class Header extends React.Component {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired
  };

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
      const text = this.state.text.trim();
      this.props.onSave(text);
      this.setState({text: ''});
    }
  }
  render() {
    return (
      <header>
        <h1>Todo-list</h1>
        <input
        className = 'new-todo'
        placeholder = 'write something you should do'
        autoFocus = 'true'
        onChange = {this.handleChange.bind(this)}
        onKeyDown = {this.handleKeyDown.bind(this)}
        value = {this.state.text}
        />
      </header>
    );
  }
}
export default Header;
