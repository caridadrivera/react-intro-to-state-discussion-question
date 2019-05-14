import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {value: ""}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <input type="text" onChange={(event) => {
          debugger
          console.log(event)
          const userInput = event.target.value
          this.setState({value:userInput})
        }}/>

        <p className="App-intro"> {this.state.value}</p>
      </div>
    );
  }
}

export default App;
