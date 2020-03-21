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

const CancellationForm = props => {
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
                  label="PNR Number"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="E-mail ID"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button type="Submit" label="Cancel" className={classes.button}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(CancellationForm);
