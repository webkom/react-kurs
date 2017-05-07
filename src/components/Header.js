import React from 'react';

class Header extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleKeyDown(event) { /* Enter har tallverdi 13 */
    if (event.which === 13) {
      const text = this.state.text.trim();
      this.props.onSave(text);
      this.setState({text: ''});
    }
  }
  render() {
    return (
      <header>
        <h1>Todo</h1>
        <input
          className='new-todo'
          placeholder='Hva trenger å bli gjort?'
          autoFocus='true'
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          value = {this.state.text}
        />
      </header>
      );
  }
  }

export default Header;
