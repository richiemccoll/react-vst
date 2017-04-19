import React, { Component } from 'react';
import VST from './components/VST';
import './App.css';

class App extends Component {
  state = {
    audioContext: window.AudioContext || window.webkitAudioContext
  }

  render() {
    return (
      <main className="App">
        <div className="App-header">
          <h2>React VST v0.0.1</h2>
        </div>
        <VST audioContext={this.state.audioContext} />
      </main>
    );
  }
}

export default App;
