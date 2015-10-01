import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus='true' />
      </header>
    );
  }
}

export default Header;
