import React from "react";
import Keyboard from 'Keyboard';

class KeyboardContainer extends React.Component {
  render() {
    return (
      <Keyboard
        notePressed={this.notePressed}
        noteReleased={this.noteReleased}
      />
    );
  }
}

export default KeyboardContainer;
