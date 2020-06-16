import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Styles } from "./Styles";
import MuiAlert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { forgotPassword } from "../../apis/users";

let validationSchema = Yup.object({
  userName: Yup.string().required("Please provide a username"),
  registeredMobile: Yup.string().required(
    "Please enter your registered mobile number"
  ),
});

const ForgotPasswordForm = (props) => {
  let history = useHistory();
  let [isOpen, setOpen] = useState(false);
  let [error, setError] = useState("");
  let [success, setSuccess] = useState({ show: false, message: "" });

  let { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      userName: "",
      registeredMobile: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: function(values) {
      props.startLoading();
      (async () => {
        let { data } = await forgotPassword(values);
        props.stopLoading();

        if (data.success) {
          /**Store the token in LocalStorage */
          setSuccess({ show: true, message: data.data });
        } else {
          setError(data.errorMessage);
          setOpen(true);
        }
        setTimeout((_) => history.push("/"), 3000);
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
        <Snackbar
          open={success.show}
          autoHideDuration={6000}
          onClose={() => setSuccess({ ...success, show: !success.show })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={() => setSuccess({ ...success, show: !success.show })}
            severity="success"
          >
            {success.message}
          </MuiAlert>
        </Snackbar>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  label="Username"
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
                  label="Registered Mobile"
                  variant="outlined"
                  name="registeredMobile"
                  value={values.registeredMobile}
                  onChange={handleChange}
                  className={classes.textfield}
                  InputProps={{
                    classes: {
                      input: classes.inputBox,
                    },
                  }}
                  required
                ></TextField>
                <div className="error">{errors.registeredMobile}</div>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" label="Submit" className={classes.button}>
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
export default withStyles(Styles)(ForgotPasswordForm);
