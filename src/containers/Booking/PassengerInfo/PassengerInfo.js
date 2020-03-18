import React, { useState, useEffect } from "react";
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

/**
 * @method PassengerInfo
 * @description The passenger info card which get generated per seat selection.
 * @param {Object} props - The props passed down the component tree
 */
const PassengerInfo = ({
  classes,
  index,
  seat,
  prefilledName,
  prefilledAge,
  prefilledGender,
  prefiller,
  handlePassenger
}) => {
  let [gender, setGender] = useState("male");
  let [name, setName] = useState("");
  let [age, setAge] = useState("");

  let handleGenderChange = e => {
    setGender(e.target.value);
    if (index === 0)
      prefiller({
        prefilledName,
        prefilledAge,
        prefilledGender: e.target.value
      });
    handlePassenger(index, { name: name, gender: e.target.value, age });
  };
  let handleNameChange = e => {
    setName(e.target.value);
    if (index === 0)
      prefiller({
        prefilledName: e.target.value,
        prefilledAge,
        prefilledGender
      });
    handlePassenger(index, { name: e.target.value, gender, age });
  };
  let handleAgeChange = e => {
    setAge(e.target.value);
    if (index === 0)
      prefiller({
        prefilledName,
        prefilledAge: e.target.value,
        prefilledGender
      });
    handlePassenger(index, { name, gender, age: e.target.value });
  };

  useEffect(() => {
    setGender(prefilledGender);
  }, [prefilledGender]);

  useEffect(() => {
    setName(prefilledName);
  }, [prefilledName]);

  useEffect(() => {
    setAge(prefilledAge);
  }, [prefilledAge]);

  return (
    <Paper elevation={1} className={classes.passengerDetails}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12}>
          <form>
            <Grid container direction="row">
              <Grid item md={2} xs={12} className={classes.seatDisplay}>
                <Typography variant="caption" style={{ marginBottom: "20px" }}>
                  <strong>Seat </strong>
                  <Typography variant="h4">{seat}</Typography>
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography variant="subtitle2" className={classes.inputLabel}>
                  Name
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Passenger Name"
                  size="small"
                  InputProps={{
                    classes: {
                      input: classes.inputBox
                    }
                  }}
                  value={name}
                  onChange={handleNameChange}
                ></TextField>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography variant="subtitle2" className={classes.inputLabel}>
                  Gender
                </Typography>
                <RadioGroup
                  aria-label="position"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" color="primary" />}
                    label="Male"
                    classes={{
                      label: classes.inputBox
                    }}
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" color="primary" />}
                    label="Female"
                    classes={{
                      label: classes.inputBox
                    }}
                    labelPlacement="end"
                  />
                </RadioGroup>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography variant="subtitle2" className={classes.inputLabel}>
                  Age
                </Typography>
                <TextField
                  placeholder="age"
                  variant="outlined"
                  size="small"
                  value={age}
                  InputProps={{
                    classes: {
                      input: classes.inputBox
                    }
                  }}
                  onChange={handleAgeChange}
                ></TextField>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(PassengerInfo);
