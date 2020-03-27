import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";

const BoardingDetails = ({ ticket }) => {
  return (
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">
                <strong>{ticket.boardingPoint}</strong>
              </Typography>
              <Typography variant="caption">Boarding Point</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">
                <strong>{ticket.reportingTime}</strong>
              </Typography>
              <Typography variant="caption">Reporting Time</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">
                <strong>
                  {(ticket.passengerList || [])
                    .map(passenger => passenger.seatNumber)
                    .join(",")}
                </strong>
              </Typography>
              <Typography variant="caption">
                Number of Seats : {(ticket.passengerList || []).length}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BoardingDetails;
