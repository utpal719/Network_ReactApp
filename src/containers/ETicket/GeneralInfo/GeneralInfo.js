import React from "react";
import { Grid, withStyles, Typography, Chip, Avatar } from "@material-ui/core";
import { Styles } from "../Styles";
import { CheckCircle } from "@material-ui/icons";

const GeneralInfo = ({ classes, ticket }) => {
  return (
    <>
      <Grid item xs={12}>
        <Chip
          avatar={
            <Avatar>
              <CheckCircle fontSize="24px" />
            </Avatar>
          }
          color="primary"
          label={`Your ticket has been sent to ${ticket.email} and ${ticket.mobile}`}
        />
      </Grid>
      {/**Booking date */}
      <Grid item xs={6}>
        <Typography variant="caption">
          <strong>Booking ID : {ticket.bookingId}</strong>
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.textRight}>
        <Typography variant="caption">
          <strong>Journey date : {ticket.journeyDate}</strong>
        </Typography>
      </Grid>
    </>
  );
};
export default withStyles(Styles)(GeneralInfo);
