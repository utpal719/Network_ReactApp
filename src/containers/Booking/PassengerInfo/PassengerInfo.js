import React from "react";
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
  defaultPassenger,
  formik,
  prefiller
}) => {
  let handleDefaultValues = e => {
    if (index === 0)
      prefiller({
        ...defaultPassenger,
        [e.currentTarget.getAttribute("data-name")]: e.target.value
      });
  };

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
                  data-name="passengerName"
                  size="small"
                  name={`passengers[${index}].passengerName`}
                  inputProps={{ "data-name": "passengerName" }}
                  InputProps={{
                    classes: {
                      input: classes.inputBox
                    }
                  }}
                  value={formik.values.passengers[index].passengerName}
                  onChange={e => {
                    handleDefaultValues(e);
                    formik.handleChange(e);
                  }}
                ></TextField>
                <div className="error">
                  {formik.errors.passengers && formik.errors.passengers[index]
                    ? formik.errors.passengers[index].passengerName
                    : ""}
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography variant="subtitle2" className={classes.inputLabel}>
                  Gender
                </Typography>
                <RadioGroup
                  aria-label="position"
                  name={`passengers[${index}].gender`}
                  value={formik.values.passengers[index].gender}
                  onChange={e => {
                    handleDefaultValues(e);
                    formik.handleChange(e);
                  }}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        size="small"
                        inputProps={{ "data-name": "gender" }}
                        color="primary"
                      />
                    }
                    label="Male"
                    classes={{
                      label: classes.inputBox
                    }}
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        inputProps={{ "data-name": "gender" }}
                        size="small"
                        color="primary"
                      />
                    }
                    label="Female"
                    classes={{
                      label: classes.inputBox
                    }}
                    labelPlacement="end"
                  />
                </RadioGroup>
                <div className="error">
                  {formik.errors.passengers && formik.errors.passengers[index]
                    ? formik.errors.passengers[index].gender
                    : ""}
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography variant="subtitle2" className={classes.inputLabel}>
                  Age
                </Typography>
                <TextField
                  placeholder="age"
                  variant="outlined"
                  size="small"
                  type="number"
                  inputProps={{ "data-name": "age" }}
                  name={`passengers[${index}].age`}
                  value={formik.values.passengers[index].age}
                  InputProps={{
                    classes: {
                      input: classes.inputBox
                    }
                  }}
                  onChange={e => {
                    handleDefaultValues(e);
                    formik.handleChange(e);
                  }}
                ></TextField>
                <div className="error">
                  {formik.errors.passengers && formik.errors.passengers[index]
                    ? formik.errors.passengers[index].age
                    : ""}
                </div>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(PassengerInfo);
