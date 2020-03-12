import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";

import { formatDate } from "./../../../utilities/Functions";

function BookingTitle(props) {
  let {
    classes,
    data: { from, to, noOfBuses, date }
  } = props;
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        style={{ textAlign: "center", height: "50px" }}
      >
        <Grid item xs={11} className={classes.bookingTitle}>
          <p style={{ fontSize: 22 }}>
            {noOfBuses} buses from {from} to {to} on {formatDate(date)}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(Styles)(BookingTitle);
