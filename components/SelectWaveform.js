import React from "react";

const SelectWaveform = ({ changeWaveformType }) => {
  return (
    <div className="waveform-select">
      <span>Current waveform: </span>
      <select onChange={(e) => changeWaveformType(e.target.value)} name="waveform">
        <option value="sine">Sine</option>
        <option value="square" defaultValue>Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
};

export default SelectWaveform;