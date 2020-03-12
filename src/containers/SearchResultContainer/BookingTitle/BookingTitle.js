import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";

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
          <p>
            {noOfBuses} Buses from {from} to {to} on {date}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(Styles)(BookingTitle);
