import React from "react";
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
      <Grid item xs={8} className={classes.gridstyle}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <InputLabel className={classes.inputlabel}>
                  ---HOW SHALL WE CALL YOU?---
                </InputLabel>
                <br />
                <TextField
                  size="small"
                  type="text"
                  label="Type your name here"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel className={classes.inputlabel}>
                  ---SHARE YOUR EMAIL---
                </InputLabel>
                <br />
                <TextField
                  size="small"
                  type="email"
                  label="We will keep it safe. We Promise!"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel className={classes.inputlabel}>
                  ---SHARE YOUR CONTACT NUMBER---
                </InputLabel>
                <br />
                <TextField
                  size="small"
                  type="text"
                  label="This will also be safe. We Promise!"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel className={classes.inputlabel}>
                  ---THE HOLIDAY---
                </InputLabel>
                <br />
                <TextField
                  size="small"
                  type="text"
                  label="Your tentative journey date"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel className={classes.inputlabel}>
                  ---WE ARE ALL EARS!---
                </InputLabel>
                <br />
                <TextField
                  size="small"
                  type="text"
                  label="Share with us your travel requirements that might help us to respond to your request"
                  variant="outlined"
                  multiline
                  rows="4"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="Submit"
                  label="Send Message"
                  className={classes.button}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(LoginForm);
