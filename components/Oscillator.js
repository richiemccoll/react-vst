import React from 'react';

export const Oscillator = (
  { osc, oscType, oscDetuneVal, toggleSound, handleVolume }
) => {
  return (
    <div className="vst-oscillator">
      <button
        height="250px"
        width="250px"
        className="vst-oscillator-detune"
        onClick={toggleSound}
      >
        Click
      </button>

      <input
        className="slider"
        type="range"
        value="50"
        min="0"
        max="100"
        step="1"
        onChange={e => handleVolume(e)}
      />
    </div>
  );
};