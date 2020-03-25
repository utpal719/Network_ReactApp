import React, { useEffect, useState } from "react";
import { Styles } from "./Styles";
import { withStyles, Grid, Typography } from "@material-ui/core";
import TripCard from "./TripCard/TripCard";
import { getMyTrips } from "../../apis/bookings";
const MyTrips = props => {
  let [trips, setTrips] = useState([]);
  let { classes } = props;
  useEffect(() => {
    (async () => {
      let data = await getMyTrips();
      setTrips(data);
      props.stopLoading();
    })();
  }, []);

  return (
    <div className={classes.gridstyle}>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          {/**Top booking header */}
          <Grid
            container
            direction="row"
            className={classes.myTripContainer}
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h5">My Trips</Typography>
            </Grid>
            {trips.map(trip => (
              <TripCard trip={trip} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(MyTrips);
