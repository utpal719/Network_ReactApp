import React from "react";
import { NavLink } from "react-router-dom";
import {
  TextField,
  InputLabel,
  Button,
  withStyles,
  Grid,
  Paper
} from "@material-ui/core";
import { Styles } from "./Styles";

const LoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.gridstyle}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="User Name"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  label="Password"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button type="Submit" label="Log In" className={classes.button}>
                  LOG IN
                </Button>
              </Grid>
              <Grid item xs={12}>
                Not Registered?
                <NavLink to="/register" className={classes.navlinked}>
                  Create an Account
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(LoginForm);
