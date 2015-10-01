import React from 'react';
import Header from './Header';
import Main from './Main';

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
    ]
  }

  render() {
    return (
      <div className='todoapp'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
