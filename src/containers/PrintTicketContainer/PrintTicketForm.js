import React from "react";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { Styles } from "./Styles";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  action: Yup.string().required("Please select an action"),
  pnrNumber: Yup.string()
    .matches(new RegExp("pnr-", "gi"), "Please enter a valid PNR (e.g : PNR-4)")
    .required("Please enter your PNR")
});

const PrintTicketForm = props => {
  const history = useHistory();

  let { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      action: "view",
      pnrNumber: ""
    },
    validationSchema,
    onSubmit: function() {
      if (values.action === "view") {
        history.push("/e-ticket", {
          pnrNumber: values.pnrNumber
        });
      }
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
                  <FormControlLabel
                    value="mail"
                    control={<Radio />}
                    label="Get Ticket by Email"
                  />
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
                  Go!!
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
