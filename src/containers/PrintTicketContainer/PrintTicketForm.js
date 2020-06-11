import React, { useState } from "react";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
} from "@material-ui/core";
import { Styles } from "./Styles";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendTicketBySms } from "../../apis/tickets";
import Alert from "@material-ui/lab/Alert";

const validationSchema = Yup.object({
  action: Yup.string().required("Please select an action"),
  pnrNumber: Yup.string()
    .matches(new RegExp("pnr-", "gi"), "Please enter a valid PNR (e.g : PNR-4)")
    .required("Please enter your PNR"),
});

const PrintTicketForm = (props) => {
  const history = useHistory();
  let [status, setStatus] = useState({
    show: false,
    severity: "",
    message: "",
  });

  let { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      action: "view",
      pnrNumber: "PNR-",
    },
    validationSchema,
    onSubmit: function(values) {
      if (values.action === "view") {
        history.push("/e-ticket", {
          pnrNumber: values.pnrNumber,
        });
      } else {
          props.startLoading();
        sendTicketBySms(values.pnrNumber).then((data) => {
          if (data.success === true) {
            setStatus({
              show: true,
              message: `Ticket has been sent to ${data.data.mobile}`,
              severity: "success",
            });
          } else {
            setStatus({
              show: true,
              message: `Sorry, we were unable to send the ticket`,
              severity: "error",
            });
          }
          props.stopLoading();
        });
      }
    },
  });

  let onClose = () =>
    setStatus({
      show: false,
      severity: "",
      message: "",
    });

  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Snackbar
        open={status.show}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={onClose}
          severity={status.severity}
        >
          {status.message}
        </Alert>
      </Snackbar>
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
                <br />
                <div className="error">
                  {touched.pnrNumber && errors.pnrNumber && errors.pnrNumber}
                </div>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup
                  aria-label="tickettype"
                  name="action"
                  value={values.action}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="view"
                    control={<Radio />}
                    label="View ticket"
                  />
                  {/* <FormControlLabel
                    value="mail"
                    control={<Radio />}
                    label="Get Ticket by Email"
                  /> */}
                  <FormControlLabel
                    value="sms"
                    control={<Radio />}
                    label=" Get mTicket by SMS"
                  />
                </RadioGroup>
                <div className="error">
                  {touched.action && errors.action && errors.action}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" label="Go" className={classes.button}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(PrintTicketForm);
