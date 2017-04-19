import React from "react";
import { Oscillator } from './Oscillator';

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

  toggleSound = () => {
    if (!this.state.playing) {
      const oscillator = this.state.context.createOscillator();
      oscillator.connect(this.state.context.destination);
      oscillator.start();
      this.setState({ osc: oscillator, playing: true });
    } else {
      this.setState({ playing: false });
      this.state.osc.stop();
    }
  };

  handleVolume = event => {
    event.preventDefault();
    const volume = Number(event.target.value) / 100;
    this.setState({ oscVolume: volume });
  };

  render() {
    return (
      <section>
        <div className="vst-visuals">Audio Wave here </div>
        <Oscillator
          osc={this.state.osc}
          type={this.state.oscType}
          oscDetuneVal={this.state.oscDetuneVal}
          toggleSound={this.toggleSound}
          handleVolume={this.handleVolume}
        />
        <div className="vst-controls">Audio Controls here</div>
      </section>
    );
  }
}

export default VST;
