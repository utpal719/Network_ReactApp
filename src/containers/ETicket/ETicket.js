import React, { useEffect, useState } from "react";
import {
  Grid,
  withStyles,
  Typography,
  Button,
  Paper,
  Chip,
  Avatar,
  Card,
  CardContent,
  Box
} from "@material-ui/core";
import { Styles } from "./Styles";
import logo from "./logo1.png";
import {
  CheckCircle,
  ArrowForwardRounded,
  SupervisedUserCircle
} from "@material-ui/icons";
import PassengerDetails from "./PassengerDetails/PassengerDetails";
import CancellationPolicy from "./CancellationPolicy/CancellationPolicy";
import ImportantContacts from "./ImportantContacts/ImportantContacts";
import { useHistory } from "react-router-dom";
import { eTicket } from "../../apis/bookings";

const ETicket = props => {
  let history = useHistory();
  let [ticket, setTicket] = useState({});

  let { classes } = props;

  useEffect(() => {
    let pnrNumber = history.location.state.pnrNumber;
    (async () => {
      let { data } = await eTicket({ pnrNumber });
      setTicket(data);
      props.stopLoading();
    })();
  }, []);

  let handlePrint = _ => window.print();
  return (
    <>
      <Box displayPrint="none">
        <div className={classes.gridstyle} />
      </Box>
      <Box displayPrint="block">
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            {/**Top booking header */}
            <Grid
              container
              direction="row"
              className={classes.eticketContainer}
              spacing={3}
            >
              <Grid item xs={4}>
                <Typography variant="h6">E-Ticket</Typography>
                <Typography variant="caption" color="textPrimary">
                  <strong>PNR :</strong> {ticket.pnrNumber}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img src={logo} alt="logo"></img>
              </Grid>
              {/* <Grid item xs={3} className={classes.textRight}>
        <Typography variant="caption">Total Fare:</Typography>
        &nbsp;&nbsp;
        <strong className={classes.totalFare}>&#8377;1920</strong>
      </Grid> */}
              <Grid item xs={2}>
                <Typography variant="caption">Total Fare:</Typography>
                &nbsp;&nbsp;
                <strong className={classes.totalFare}>
                  &#8377;{ticket.totalFare}
                </strong>
                <Box displayPrint="none">
                  <Button
                    variant="contained"
                    size="small"
                    style={{ background: "#4caf50", color: "#eee" }}
                    fullWidth
                    onClick={handlePrint}
                  >
                    Print
                  </Button>
                </Box>
              </Grid>
              {/**Booking info container */}
              <Grid item xs={12}>
                <Paper elevation={2}>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    className={classes.paddingTen}
                  >
                    {/**Top chip */}
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
                    <Grid item xs={5}>
                      <Typography variant="caption">
                        <strong>Booking ID : {ticket.bookingId}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography
                        variant="caption"
                        className={classes.textRight}
                      >
                        <strong>Journey date : {ticket.journeyDate}</strong>
                      </Typography>
                    </Grid>
                    {/**Time card */}
                    <Grid item xs={12}>
                      <Grid container spacing="2" justify="space-around">
                        <Grid item xs={5}>
                          <Card elevation={3}>
                            <CardContent>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                gutterBottom
                              >
                                From
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                <strong>{ticket.fromCity}</strong>
                              </Typography>
                              <Typography variant="caption">
                                <strong>
                                  Departing at : {ticket.startTime}
                                </strong>
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={2} className={classes.flexed}>
                          <Typography
                            variant="h5"
                            className={classes.marginAuto}
                          >
                            <ArrowForwardRounded />
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Card elevation={3}>
                            <CardContent>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                gutterBottom
                              >
                                To
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                <strong>{ticket.toCity}</strong>
                              </Typography>
                              <Typography variant="caption">
                                <strong>Arriving at : {ticket.endTime}</strong>
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/**Boarding details */}
                    <Grid item xs={12}>
                      <Card elevation={3}>
                        <CardContent>
                          <Grid container>
                            {/* <Grid item xs={1} className={classes.flexed}>
                    <DepartureBoardRounded
                      size="large"
                      className={classes.marginAuto}
                    />
                  </Grid> */}
                            <Grid item xs={4}>
                              <Typography variant="subtitle2">
                                <strong>{ticket.boardingPoint}</strong>
                              </Typography>
                              <Typography variant="caption">
                                Boarding Point
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="subtitle2">
                                <strong>{ticket.reportingTime}</strong>
                              </Typography>
                              <Typography variant="caption">
                                Reporting Time
                              </Typography>
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
                                Number of Seats :{" "}
                                {(ticket.passengerList || []).length}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/**Passenger details header */}
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{ display: "flex" }}>
                        <SupervisedUserCircle
                          fontSize="large"
                          color="secondary"
                        />
                        &nbsp;Passenger Details
                      </Typography>
                    </Grid>
                    {/**Passenger details */}
                    <Grid item xs={12}>
                      <Paper elevation={3}>
                        <Grid container direction="row" spacing={3}>
                          {(ticket.passengerList || []).map(passenger => (
                            <PassengerDetails passenger={passenger} />
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                    {/**App link */}
                    <Grid item xs={12}>
                      <a href="http://techvariable.com" target="_blank">
                        <img
                          className={classes.appLinkImage}
                          alt="appLink"
                          src="http://www.techvariable.com/database/banner.png"
                        />
                      </a>
                    </Grid>
                  </Grid>
                  <CancellationPolicy />
                  <ImportantContacts />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default withStyles(Styles)(ETicket);
