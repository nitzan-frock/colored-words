import React, { Component } from 'react';

import './App.css';
import MyWords from './components/MyWords/MyWords';
import rgbHex from 'rgb-hex';

class App extends Component {
  state = {
    myWords: [
        {word:'word', color: '37e59f'},
        {word:'bird', color: 'black'},
        {word:'ostrich', color: 'black'},
        {word:'Dee', color: 'black'},
      ],
  }

  wordClickedHandler = (index) => {
    console.log("was clicked.");

    // generate random color values for rgb
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const RGB = 'RGB( ' + r + ', ' + g + ', ' + b + ')';

    const newColor = rgbHex(r, g, b);
    
    this.setState((prevState, props) => {
      const oldMyWords = prevState.myWords;
      oldMyWords[index].color = RGB;
      return {
        myWords: oldMyWords
      }
    });
  }

  render() {
    return (
      <div className="App">
        <MyWords
          words={this.state.myWords} 
          clicked={this.wordClickedHandler} />
      </div>
    );
  }
}

export default App;
