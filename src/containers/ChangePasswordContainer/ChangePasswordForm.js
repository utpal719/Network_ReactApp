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
import { changePassword } from "../../apis/users";
import { useDispatch } from "react-redux";
import actionConstants from "../../redux/actionConstants";

let validationSchema = Yup.object({
  oldPassword: Yup.string().required("Please enter your old password"),
  newPassword: Yup.string().required("Please enter a new password"),
});

const ChangePassword = (props) => {
  let history = useHistory();
  let [isOpen, setOpen] = useState(false);
  let dispatch = useDispatch();
  let [error, setError] = useState("");

  let { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: function(values) {
      props.startLoading();
      (async () => {
        let { data } = await changePassword(values);
        if (data.success) {
          /**Store the token in LocalStorage */
          localStorage.setItem("ntToken", data.data.token);
          dispatch({
            type: actionConstants.SET_USER_INFO,
            payload: { token: data.data.token },
          });
          props.stopLoading();
          history.push("/");
        } else {
          setError(data.errorMessage);
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
            {error}
          </MuiAlert>
        </Snackbar>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  label="Old Password"
                  variant="outlined"
                  name="oldPassword"
                  value={values.oldPassword}
                  onChange={handleChange}
                  className={classes.textfield}
                  InputProps={{
                    classes: {
                      input: classes.inputBox,
                    },
                  }}
                  required
                ></TextField>
                <div className="error">{errors.oldPassword}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  label="New Password"
                  variant="outlined"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  className={classes.textfield}
                  InputProps={{
                    classes: {
                      input: classes.inputBox,
                    },
                  }}
                  required
                ></TextField>
                <div className="error">{errors.newPassword}</div>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  label="Change Password"
                  className={classes.button}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(ChangePassword);
