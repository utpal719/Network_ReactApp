import React from "react";
import {
  Grid,
  withStyles,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";
import { Styles } from "../Styles";
import { ArrowForwardRounded } from "@material-ui/icons";
import { formatAMPM } from "../../../utilities/Functions";

const TimeCard = ({ classes, ticket }) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing="2" justify="space-around">
        <Grid item xs={5}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                From
              </Typography>
              <Typography variant="h6" color="textPrimary">
                <strong>{ticket.fromCity}</strong>
              </Typography>
              <Typography variant="caption">
                <strong>Departing at : {formatAMPM(ticket.startTime)}</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.flexed}>
          <Typography variant="h5" className={classes.marginAuto}>
            <ArrowForwardRounded />
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                To
              </Typography>
              <Typography variant="h6" color="textPrimary">
                <strong>{ticket.toCity}</strong>
              </Typography>
              <Typography variant="caption">
                <strong>Arriving at : {formatAMPM(ticket.endTime)}</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(TimeCard);
