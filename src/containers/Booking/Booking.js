import React, { useState } from "react";
import {
  Grid,
  withStyles,
  Typography,
  Paper,
  TextField,
  RadioGroup,
  Radio
} from "@material-ui/core";
import { useSelector, useStore } from "react-redux";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { AccountCircle, PermContactCalendar } from "@material-ui/icons";
import PassengerInfo from "./PassengerInfo/PassengerInfo";

const Booking = ({ classes }) => {
  let { seats, fare } = useSelector(state => state.bookingInfo);

  return (
    <div className={classes.gridstyle}>
      <NavBar />
      <Grid container justify="center" className={classes.sectionPadded}>
        <Grid item xs={10}>
          <Grid container direction="row" justify="center">
            <Grid item xs={10}>
              <Typography variant="h5" style={{ display: "flex" }}>
                <AccountCircle fontSize="large" color="secondary" />
                &nbsp;Passenger Information
              </Typography>
              {seats.map((seat, index) => {
                return (
                  <PassengerInfo
                    key={index}
                    index={index}
                    seat={seat}
                  ></PassengerInfo>
                );
              })}
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h5" style={{ display: "flex" }}>
                <PermContactCalendar
                  fontSize="large"
                  style={{ color: "darkorange" }}
                />
                &nbsp;Contact Details
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default withStyles(Styles)(Booking);
