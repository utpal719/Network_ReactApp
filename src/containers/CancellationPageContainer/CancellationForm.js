import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, withStyles, Grid, Paper } from "@material-ui/core";
import { Styles } from "./Styles";
import { useFormik } from "formik";
import * as Yup from "yup";

let validationSchema = Yup.object({
  pnrNumber: Yup.string()
    .matches(new RegExp("pnr-", "gi"), "Your PNR number must start with PNR-")
    .required(),
  mobile: Yup.string()
    .matches(/^([0]|\+91)?[789]\d{9}$/, "Please enter a valid phone number")
    .required()
});
const CancellationForm = props => {
  let history = useHistory();
  let { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      pnrNumber: "",
      mobile: ""
    },
    validationSchema,
    onSubmit: function(values) {
      history.push("/cancelbooking", {
        pnrNumber: values.pnrNumber,
        mobile: values.mobile
      });
    }
  });

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
                  name="pnrNumber"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.pnrNumber}
                  className={classes.textfield}
                ></TextField>
                <div class="error">{errors.pnrNumber}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="Mobile"
                  variant="outlined"
                  onChange={handleChange}
                  name="mobile"
                  value={values.mobile}
                  className={classes.textfield}
                ></TextField>
                <div class="error">{errors.mobile}</div>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" label="Cancel" className={classes.button}>
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
