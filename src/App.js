import React, { Component } from 'react';

import './App.css';
import MyWord from './components/MyWord/MyWord';
import rgbHex from 'rgb-hex';

class App extends Component {
  state = {
    myWords: [
        {word:'word', color: 'black'},
        {word:'bird', color: 'black'},
        {word:'ostrich', color: 'black'},
        {word:'Dee', color: 'black'},
      ],
  }

  wordClickedHandler = () => {
    console.log("was clicked.");
    // generate random color values for rgb
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    console.log('RGB: ' + r + ', ' + g + ', ' + b);
    //create copy of myWords for immutable change
    const newColorForMyWords = {...this.state.myWords};
    newColorForMyWords[1].color = rgbHex(r, g, b);
    
    
    this.setState({myWords: newColorForMyWords});
  }

  render() {


    return (
      <div className="App">
        <MyWord
          word={this.state.myWords[1].word}
          color={this.state.myWords[1].color} 
          click={this.wordClickedHandler} />
      </div>
    );
  }
}

export default App;
