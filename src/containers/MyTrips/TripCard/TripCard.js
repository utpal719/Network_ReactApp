import React from "react";
import {
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import { MoreVert, ArrowForwardRounded } from "@material-ui/icons";
import { Styles } from "../Styles";

const TripCard = ({ classes, trip }) => {
  let journeyDate = new Date(trip.journeyDate);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let date = journeyDate.getDate();
  let month = months[journeyDate.getMonth()];
  let year = journeyDate.getFullYear();
  let day = days[journeyDate.getDay()];

  return (
    <Grid item xs={12}>
      <ExpansionPanel elevation={2}>
        <ExpansionPanelSummary expandIcon={<MoreVert />}>
          <Grid container>
            <Grid item xs={3}>
              <Typography
                variant="h3"
                className={classes.textCenter}
                style={{ color: "tomato" }}
              >
                {date}
              </Typography>
              <Typography
                variant="subtitle2"
                component="h6"
                color="textSecondary"
                className={classes.textCenter}
              >
                {month}, {year}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.textCenter}
                component="h6"
              >
                <strong>{day}</strong>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption"> From</Typography>
              <Typography variant="h5"> {trip.fromCity}</Typography>
              <Typography
                variant="caption"
                component="h6"
                color="textSecondary"
              >
                Departing at : {trip.startTime}
              </Typography>
            </Grid>
            {/* <Grid item xs={1} className={classes.flexed}>
              <ArrowForwardRounded
                fontSize="large"
                className={classes.marginAuto}
              ></ArrowForwardRounded>
            </Grid> */}
            <Grid item xs={2}>
              <Typography variant="caption"> To</Typography>
              <Typography variant="h5"> {trip.toCity}</Typography>
              <Typography
                variant="caption"
                component="h6"
                color="textSecondary"
              >
                Arrival at : {trip.endTime}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h3" className={classes.textCenter}>
                {trip.noOfSeat}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.textCenter}
                component="h6"
              >
                Seats
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.textCenter}
                component="h6"
              >
                Total Fare
              </Typography>
              <Typography variant="h5" className={classes.textCenter}>
                &#8377; {trip.totalFare}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.textCenter}
                component="h6"
              >
                {trip.paymentStatus}
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        {/* <ExpansionPanelDetails>
        </ExpansionPanelDetails> */}
      </ExpansionPanel>
    </Grid>
  );
};

export default withStyles(Styles)(TripCard);
