import React from "react";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Paper
} from "@material-ui/core";
import { Formik } from "formik";
import { Styles } from "./Styles";

function validateEmail(value) {
  let error;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    error = "Invalid email address";
  }
  return error;
}

function validateContact(value) {
  let error;
  console.log("inside contact validation");
  if (!/^\d{10}$/i.test(value.contact))
  {
    error="Mobile Number should contain 0-9"
  }
  return error;
}

const Register = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const { classes} = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.gridstyle}>
        <Paper className={classes.paper}>
          <Formik
            initialValues={{
              email: "",
              contact:""
            }}
          >
            {({ errors, touched, isValidating }) => (
              <form onSubmit={handleSubmit} className={classes.formstyle}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      type="text"
                      label="Full Name"
                      variant="outlined"
                      className={classes.textfield}
                      required
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      validate={validateEmail}
                      className={classes.textfield}
                      required
                    ></TextField>
                       {errors.email && touched.email && <div>{errors.email}</div>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      type="text"
                      name="contact"
                      label="Mobile Number"
                      variant="outlined"
                      validate={validateContact}
                      className={classes.textfield}
                      required
                    ></TextField>
                    {errors.contact && touched.contact && <div>{errors.contact}</div>}
                  </Grid>
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
                    <Button
                      type="Submit"
                      label="Register"
                      className={classes.button}

                    >
                      REGISTER NOW
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(Register);
