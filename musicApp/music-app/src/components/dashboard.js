import React, { Component } from "react";
import OnlineSwitch from "./online";
import VolumeSlider from "./volume";
import SoundQuality from "./soundQuality";
import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      online: true,
      volume: 80,
      quality: "normal"
    };
  }

  toggleNotification = msg => {
    const msgIndex = this.state.notifications.indexOf(msg);

    if (this.state.notifications.includes(msg)) {
      this.state.notifications.splice(msgIndex, 1);
    } else {
      this.setState({ notifications: [...this.state.notifications, msg] });
    }
  };
  addNotification = msg => {
    this.setState({ notifications: [...this.state.notifications, msg] });
  };
  removeNotification = msg => {
    const msgIndex = this.state.notifications.indexOf(msg);
    this.state.notifications.splice(msgIndex, 1);
  };

  toggleOnline = () => {
    this.setState({ online: !this.state.online });

    const msg =
      "Your application is offline. You won't be able to share or stream music to other devices.";

    this.toggleNotification(msg);
  };

  volumeSlider = newValue => {
    this.setState({ volume: newValue });

    const msg =
      "Listening to music at a high volume could cause long-term hearing loss.";
    const msg2 = "Your music is now muted";

    if (newValue > 80 && !this.state.notifications.includes(msg)) {
      this.addNotification(msg);
    }
    if (newValue <= 80 && this.state.notifications.includes(msg)) {
      this.removeNotification(msg);
    }
    if (newValue === 0 && !this.state.notifications.includes(msg2)) {
      this.addNotification(msg2);
    }
    if (newValue > 0 && this.state.notifications.includes(msg2)) {
      this.removeNotification(msg2);
    }
  };

  soundQuality = event => {
    this.setState({ quality: event.target.value });

    const msg =
      "Music quality is degraded. Increase quality if your connection allows it.";
    const msg2 =
      "Listening to music at a high volume could cause long-term hearing loss.";

    if (
      event.target.value === "low" &&
      !this.state.notifications.includes(msg)
    ) {
      this.addNotification(msg);
    }
    if (
      event.target.value !== "low" &&
      this.state.notifications.includes(msg)
    ) {
      this.removeNotification(msg);
    }
    if (
      event.target.value === "high" &&
      !this.state.notifications.includes(msg2)
    ) {
      this.addNotification(msg2);
    }
    if (
      event.target.value !== "high" &&
      this.state.notifications.includes(msg2)
    ) {
      this.removeNotification(msg2);
    }
  };

  render() {
    var cardStyle = {
      display: "flex",
      width: "20vw",
      transitionDuration: "0.3s",
      height: "15vw",
      border: "1px solid black",
      outlinestyle: "solid",
      outlinecolor: "red"
    };

    return (
      <div className="dashboard-wrapper">
        <h1>Welcome User!</h1>

        <div className="dashboard-row">
          <div className="dashboard-col">
            <Card elevation={3} style={cardStyle} variant="outlined">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <OnlineSwitch
                  onlineState={this.state.online}
                  onlineFunc={this.toggleOnline}
                ></OnlineSwitch>
              </Grid>
            </Card>
          </div>

          <div className="dashboard-col">
            <Card style={cardStyle} variant="outlined">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <VolumeSlider
                  volumeState={this.state.volume}
                  volumeFunc={this.volumeSlider}
                ></VolumeSlider>
              </Grid>
            </Card>
          </div>

          <div className="dashboard-col">
            <Card style={cardStyle} variant="outlined">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <SoundQuality
                  qualityState={this.state.quality}
                  qualityFunc={this.soundQuality}
                ></SoundQuality>
              </Grid>
            </Card>
          </div>
        </div>

        <div className="notifications">
          <h3>Notifications:</h3>
          {this.state.notifications.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
