import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { Styles } from "../Styles";

const PassengerDetails = ({
  classes,
  passenger,
  selectable,
  handleSelect,
  selectedPassengers,
  isAllSelected,
  index
}) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        {selectable && (
          <Grid item xs={1} className={classes.flexed}>
            <input
              type="checkbox"
              className={classes.marginAuto}
              disabled={isAllSelected}
              checked={selectedPassengers.includes(index) ? true : false}
              onClick={e => handleSelect(index)}
            ></input>
          </Grid>
        )}
        <Grid item md={2} xs={2} className={classes.seatDisplay}>
          <Typography
            variant="caption"
            // style={{ marginBottom: "20px" }}
          >
            <strong>Seat </strong>
            <Typography variant="subtitle2">
              <strong>{passenger.seatNumber}</strong>
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="caption">Passenger Name</Typography>
          <Typography variant="subtitle2">
            <strong>{passenger.passengerName}</strong>
          </Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="caption">Gender</Typography>
          <Typography variant="subtitle2">
            <strong>{passenger.gender}</strong>
          </Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="caption">Age</Typography>
          <Typography variant="subtitle2">
            <strong>{passenger.age}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(PassengerDetails);
