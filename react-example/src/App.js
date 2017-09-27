import React, { Component } from 'react';
import './App.css';

const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

class App extends Component {
  displayPepperNames = () => {
    return peppers.map(pepper => {
      return (
        <div className="pepper-name-btn" key={pepper.name}>
          {pepper.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Peppers</h1>
        </header>
        <div>{this.displayPepperNames()}</div>
      </div>
    );
  }
}

export default App;
