import React from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  withStyles
} from "@material-ui/core";
import { Styles } from "../Styles";

const ContactDetails = ({ classes, setEmail, setPhone, email, phone }) => {
  return (
    <Paper elevation={2} className={classes.passengerDetails}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                variant="caption"
                style={{ display: "block", marginBottom: "20px" }}
              >
                Your ticket will be sent to these details
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="email"
                size="small"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="phone"
                size="small"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(ContactDetails);
