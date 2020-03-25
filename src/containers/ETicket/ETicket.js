import React from "react";
import {
  Grid,
  withStyles,
  Typography,
  Button,
  Paper,
  Chip,
  Avatar,
  Card,
  CardContent
} from "@material-ui/core";
import { Styles } from "./Styles";
import {
  CheckCircle,
  ArrowForwardRounded,
  SupervisedUserCircle
} from "@material-ui/icons";

const ETicket = ({ classes }) => {
  let email = "samdeka28@gmail.com";
  let phone = "9706202403";
  return (
    <ErrorBoundary>
    <div className={classes.gridstyle}>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          {/**Top booking header */}
          <Grid
            container
            direction="row"
            className={classes.eticketContainer}
            spacing={3}
          >
            <Grid item xs={6}>
              <Typography variant="h6">E-Ticket</Typography>
              <Typography variant="caption" color="textPrimary">
                <strong>PNR :</strong> Pnr-1608825
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.textCenter}>
              <Typography variant="caption">Total Fare:</Typography>&nbsp;&nbsp;
              <strong className={classes.totalFare}>&#8377;1920</strong>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                size="small"
                style={{ background: "#4caf50", color: "#eee" }}
                fullWidth
              >
                Print
              </Button>
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
                  <Grid item xs={12}>
                    <Chip
                      avatar={
                        <Avatar>
                          <CheckCircle fontSize="24px" />
                        </Avatar>
                      }
                      color="primary"
                      label={`Your ticket has been sent to ${email} and ${phone}`}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      Booking date : {new Date().toDateString()}
                    </Typography>
                  </Grid>
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
                              <strong>Guwahati</strong>
                            </Typography>
                            <Typography variant="caption">
                              <strong>Departing at : 10:30</strong>
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
                            <Typography
                              variant="caption"
                              color="textSecondary"
                              gutterBottom
                            >
                              To
                            </Typography>
                            <Typography variant="h6" color="textPrimary">
                              <strong>Tinsukia</strong>
                            </Typography>
                            <Typography variant="caption">
                              <strong>Arriving at : 17:30</strong>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
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
                              <strong>ISBT Guwahati</strong>
                            </Typography>
                            <Typography variant="caption">
                              Boarding Point
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="subtitle2">
                              <strong>10:00</strong>
                            </Typography>
                            <Typography variant="caption">
                              Reporting Time
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="subtitle2">
                              <strong>31, 26</strong>
                            </Typography>
                            <Typography variant="caption">
                              Number of Seats : 2
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" style={{ display: "flex" }}>
                      <SupervisedUserCircle
                        fontSize="large"
                        color="secondary"
                      />
                      &nbsp;Passenger Details
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3}>
                      <Grid container direction="row" spacing={3}>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid
                              item
                              md={2}
                              xs={12}
                              className={classes.seatDisplay}
                            >
                              <Typography
                                variant="caption"
                                // style={{ marginBottom: "20px" }}
                              >
                                <strong>Seat </strong>
                                <Typography variant="subtitle2">
                                  <strong>{32}</strong>
                                </Typography>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">
                                Passenger Name
                              </Typography>
                              <Typography variant="subtitle2">
                                <strong>Samudra</strong>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">Gender</Typography>
                              <Typography variant="subtitle2">
                                <strong>Male</strong>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">Age</Typography>
                              <Typography variant="subtitle2">
                                <strong>27</strong>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        {/** */}
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid
                              item
                              md={2}
                              xs={12}
                              className={classes.seatDisplay}
                            >
                              <Typography
                                variant="caption"
                                // style={{ marginBottom: "20px" }}
                              >
                                <strong>Seat </strong>
                                <Typography variant="subtitle2">
                                  <strong>{32}</strong>
                                </Typography>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">
                                Passenger Name
                              </Typography>
                              <Typography variant="subtitle2">
                                <strong> Samudra</strong>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">Gender</Typography>
                              <Typography variant="subtitle2">
                                <strong>Male</strong>
                              </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                              <Typography variant="caption">Age</Typography>
                              <Typography variant="subtitle2">
                                <strong>27</strong>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  {/**App link */}
                  <Grid item xs={12}>
                    <img
                      className={classes.appLinkImage}
                      alt="app"
                      src="http://www.techvariable.com/database/banner.png"
                    ></img>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </ErrorBoundary>
  );
};

export default withStyles(Styles)(ETicket);
