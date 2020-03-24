import React from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  withStyles
} from "@material-ui/core";
import { Styles } from "../Styles";
/**
 * @method ContactDetails
 * @description The contact component, used to collect the contact details of the user
 * @param {Object} props - The props passed down the component tree
 */

const ContactDetails = ({ classes, formik }) => {
  return (
    <Paper elevation={2} className={classes.passengerDetails}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                variant="caption"
                style={{ display: "block", marginBottom: "20px" }}
              >
                Your ticket will be sent to these details
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="email"
                size="small"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                fullWidth
              ></TextField>
              <div className="error">{formik.errors.email}</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                label="phone"
                size="small"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                fullWidth
              ></TextField>
              <div className="error">{formik.errors.phone}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(ContactDetails);
