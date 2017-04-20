import React from "react";
import { frequencies } from "./constants/noteFrequencies";
import "./Keyboard.css";

const Keyboard = ({ notePressed, noteReleased }) => {
  const keyboardKeys = frequencies.map((item, key) => {
    return (
      <div
        className="key"
        key={item.note}
        data-frequency={item.frequency}
        onMouseDown={notePressed}
        onMouseUp={noteReleased}
      >
        <text>{item.note}</text>
      </div>
    );
  });

  return (
    <div className="keyboard">
      {keyboardKeys}
    </div>
  );
};

export default Keyboard;
