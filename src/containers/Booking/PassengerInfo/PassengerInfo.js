import React, { useState } from "react";
import {
  Grid,
  withStyles,
  Paper,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { Styles } from "../Styles";

const PassengerInfo = ({ classes, index, seat }) => {
  let [gender, setGender] = useState("male");
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
                Passenger {index + 1} | <strong>Seat {seat}</strong>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="Passenger Name"
                size="small"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography variant="subtitle2">Gender</Typography>
              <RadioGroup
                aria-label="position"
                name="gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Age</Typography>
              <TextField
                placeholder="age"
                variant="outlined"
                size="small"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(PassengerInfo);
