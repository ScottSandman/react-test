import React, { Component } from 'react';
import './App.css';
import ImageAvatar from './Avatar'
import Form from './Form'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ImageAvatar />
        <Form />
      </div>
    );
  }
}

export default App;
