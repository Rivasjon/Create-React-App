import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";

const OnlineSwitch = props => (
  <div>
    <h1>Online Mode</h1>
    <h4>Is this application connected to the internet?</h4>
    <div className="m-t">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={props.onlineState} onChange={props.onlineFunc} />
          }
          label="Online"
        />
      </FormGroup>
    </div>
  </div>
);

export default OnlineSwitch;
