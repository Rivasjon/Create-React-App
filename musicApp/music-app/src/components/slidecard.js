import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default class MasterVolumeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 20,
      mute: false,
      previousVolume: 40,
      volumeNotification: false
    };
  }

  muteVolume = (value, event) => {
    let newMute = !this.state.mute;
    this.setState({
      mute: newMute,
      previousVolume: this.state.volume,
      volume: newMute ? 0 : this.state.previousVolume
    });
  };

  handleChange = (event, newValue) => {
    this.setState({ volume: newValue });
    if (this.state.volume >= 80) {
      this.setState({ volumeNotification: true });
    }
  };

  render() {
    return (
      <Card className={this.classes.card}>
        <CardContent>
          <div className={this.classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Volume
            </Typography>
            <Slider
              defaultValue={20}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={10}
              marks
              min={0}
              max={100}
              value={this.state.volume}
              onChange={this.handleChange}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => this.muteVolume()}>
            {this.state.mute ? "Unmute" : "Mute"}
          </Button>
        </CardActions>
      </Card>
    );
  }
}
