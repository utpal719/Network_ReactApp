import React from "react";
import { TextField, Button, withStyles, Grid, Paper } from "@material-ui/core";
import { Styles } from "./Styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { register } from "../../apis/users";

let validationSchema = Yup.object({
  userName: Yup.string().required("Please enter a username"),
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters long")
    .required("Please enter a password"),
  mobile: Yup.string()
    .matches(/^([0]|\+91)?[789]\d{9}$/, "Please enter a valid phone number")
    .required()
});

const Register = props => {
  let { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      mobile: "",
      name: ""
    },
    validationSchema,
    onSubmit: function(values) {
      (async () => {
        let data = await register(values);
        console.log(data);
      })();
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
                  label="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
                {errors.name && touched.name && (
                  <div className="error">{errors.name}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  label="Mobile Number"
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
                {errors.mobile && touched.mobile && (
                  <div className="error">{errors.mobile}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="User Name"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
                {errors.userName && touched.userName && (
                  <div className="error">{errors.userName}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
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
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(Register);
