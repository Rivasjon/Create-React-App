import React from "react";
import { AppBar, Button, TextField, Typography, Grid } from "@material-ui/core";

const SignIn = props => (
  <div>
    <AppBar position="static">
      <Typography>My Music App</Typography>
    </AppBar>
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="user"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            props.signIn();
          }}
        >
          Sign In
        </Button>
      </form>
    </Grid>
  </div>
);

export default SignIn;
