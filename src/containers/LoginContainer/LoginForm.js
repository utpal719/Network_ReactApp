import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Paper,
  Snackbar,
} from "@material-ui/core";
import { Styles } from "./Styles";
import MuiAlert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { authenticate } from "../../apis/users";
import { useDispatch } from "react-redux";
import actionConstants from "../../redux/actionConstants";

let validationSchema = Yup.object({
  userName: Yup.string().required("Please provide a username"),
  password: Yup.string().required("Please provide your password"),
});

const LoginForm = (props) => {
  let history = useHistory();
  let [isOpen, setOpen] = useState(false);
  let dispatch = useDispatch();
  let { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: function(values) {
      props.startLoading();
      (async () => {
        let data = await authenticate(values);
        if (data.status === 200) {
          /**Store the token in LocalStorage */
          localStorage.setItem("ntToken", data.data.token);
          dispatch({
            type: actionConstants.SET_USER_INFO,
            payload: { token: data.data.token },
          });
          props.stopLoading();
          history.push("/");
        } else {
          props.stopLoading();
          setOpen(true);
        }
      })();
    },
  });

  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.gridstyle}>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={() => setOpen(!isOpen)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={() => setOpen(!isOpen)}
            severity="error"
          >
            The Username or password you've entered is incorrect
          </MuiAlert>
        </Snackbar>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="User Name"
                  variant="outlined"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  className={classes.textfield}
                  InputProps={{
                    classes: {
                      input: classes.inputBox,
                    },
                  }}
                  required
                ></TextField>
                <div className="error">{errors.userName}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className={classes.textfield}
                  InputProps={{
                    classes: {
                      input: classes.inputBox,
                    },
                  }}
                  required
                ></TextField>
                <div className="error">{errors.password}</div>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" label="Log In" className={classes.button}>
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
