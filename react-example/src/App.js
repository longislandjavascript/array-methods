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
  displayPepperNames = arrayOfPeppers => {
    return arrayOfPeppers.map(pepper => {
      return (
        <div className="pepper-name-btn" key={pepper.name}>
          {pepper.name}
        </div>
      );
    });
  };

  displayTotalHotness = () => {
    return peppers.reduce((total, pepper) => {
      return total + pepper.hotness;
    }, 0);
  };

  displayHotPeppers = () => {
    let hotPeppers = peppers.filter(pepper => {
      return pepper.hotness > 4;
    });

    return this.displayPepperNames(hotPeppers);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LIJS Array Methods - React Example</h1>
        </header>

        <div>
          <h1 className="title">All Peppers in Pepper Array</h1>
          {this.displayPepperNames(peppers)}
        </div>

        <div>
          <h1 className="title">Total Hotness of All Peppers</h1>
          <h2>{this.displayTotalHotness()}</h2>
        </div>

        <div>
          <h1 className="title">Hot Peppers Only</h1>
          {this.displayHotPeppers()}
        </div>
      </div>
    );
  }
}

export default App;
