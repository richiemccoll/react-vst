import React from "react";
import Keyboard from './Keyboard';
import SelectWaveform from './SelectWaveform';

class VST extends React.Component {
  state = {
    audioContext: {},
    osc: {},
    oscDetuneVal: 0,
    oscType: "sine",
    oscVolume: .5,
    playing: false
  };

  componentDidMount() {
    const audioContext = new this.props.audioContext();
    this.setState({ context: audioContext });
  }

  playTone = ({ frequency }) => {
    const oscillator = this.state.context.createOscillator();
    oscillator.connect(this.state.context.destination);
    const type = this.state.oscType;
    oscillator.frequency.value = frequency;
    oscillator.start();
    this.setState({ osc: oscillator, playing: true });
  }

  notePressed = (e) => {
    let frequency = e.target.dataset;
    this.playTone(frequency);
  }

  noteReleased = (e) => {
    this.setState({ playing: false });
    this.state.osc.frequency.value = null;
    this.state.osc.stop();
  }

  changeWaveformType = (waveformType) => {
    const { type } = this.state.osc;
    this.setState({ type: waveformType });
  }

  render() {
    return (
      <section>
        <div className="vst-visuals">Audio Wave here </div>
        <SelectWaveform changeWaveformType={this.changeWaveformType} />
        <Keyboard notePressed={this.notePressed} noteReleased={this.noteReleased} />
        <div className="vst-controls">Audio Controls here</div>
      </section>
    );
  }
}

export default VST;
