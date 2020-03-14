import React, { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  withStyles,
  Grid,
  Typography,
  Button,
  Paper,
  Select
} from "@material-ui/core";
import { Styles } from "../Styles";
import { CalendarToday } from "@material-ui/icons";
import Layout from "../../../components/BusLayout/Layout/Layout";
import Actions from "../../../redux/actionConstants";

const SelectionContainer = ({
  classes,
  handleSelect,
  handleBoardingPoint,
  selectedSeats,
  totalFare
}) => {
  let dispatch = useDispatch();
  let searchData = useSelector(state => state.search);
  let { seatCapacity = 32 } = useSelector(state => state.bus);
  let dummyBoardingPoints = [
    "PALTAN BAZAR(09:00 PM)",
    "ISBT GUWAHATI(09:45 PM)"
  ];

  let [boardingPoint, setBoardingPoint] = useState(0);

  let occupied = [5, 10, 12];

  let handleBoardingSelect = e => {
    let boardingPoint = e.target.value;
    setBoardingPoint(boardingPoint);
    handleBoardingPoint(dummyBoardingPoints[boardingPoint - 1]);
  };

  let handleContinue = () => {
    dispatch({ type: Actions.SET_FARE, payload: { fare: totalFare } });
    dispatch({ type: Actions.SET_SEATS, payload: { seats: selectedSeats } });
  };

  console.log(useStore().getState());

  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.section}
    >
      <Grid item xs={12} md={10}>
        <Paper elevation={2} className={classes.seatPaperContainer}>
          <Grid container direction="row">
            <Grid item xs={12} md={6}>
              <Layout
                handleSelect={handleSelect}
                seatCapacity={seatCapacity}
                occupied={occupied}
              ></Layout>
            </Grid>
            {/**Seat info */}
            <Grid item xs={12} md={6} style={{ marginTop: "20px" }}>
              <Grid container direction="row" justify="center">
                <Grid item xs={11} md={8}>
                  {/**Available seat */}
                  <Grid container>
                    <Grid item xs={1}>
                      <span className={classes.availableSeat}></span>
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="subtitle2">
                        Available Seat
                      </Typography>
                    </Grid>
                  </Grid>
                  {/**Occupied seat */}
                  <Grid container>
                    <Grid item xs={1}>
                      <span className={classes.occupiedSeat}></span>
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="subtitle2">Occupied Seat</Typography>
                    </Grid>
                  </Grid>
                  {/**Selected seat */}
                  <Grid container>
                    <Grid item xs={1}>
                      <span className={classes.selectedSeat}></span>
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="subtitle2">Selected Seat</Typography>
                    </Grid>
                  </Grid>
                  {/**Travel date */}
                  <Grid container style={{ margin: "20px 0px" }}>
                    <Grid item xs={1}>
                      <CalendarToday />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="h6">
                        Travel Date : {searchData.date}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/**Seats selected and total fare */}
                  <Grid container style={{ margin: "20px 0px" }}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">
                        Seat (s) : {selectedSeats.length}
                      </Typography>
                      <Typography variant="subtitle1">
                        Fare : &#8377;{totalFare}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/**Boarding point dropdown */}
          <Grid container direction="row" style={{ margin: "50px 0px" }}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item xs={11} md={6}>
                  <Typography variant="h6">Choose a Boarding Point</Typography>
                  <Select
                    variant="outlined"
                    value={boardingPoint}
                    onChange={handleBoardingSelect}
                    style={{ display: "block", margin: "10px 0px" }}
                  >
                    <option value={0}>--Boarding Points-- </option>
                    {dummyBoardingPoints.map((points, index) => {
                      return (
                        <option key={index} value={index + 1}>
                          {points}
                        </option>
                      );
                    })}
                  </Select>
                  <Button
                    onClick={handleContinue}
                    variant="contained"
                    color="primary"
                  >
                    Continue
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} className={classes.flexed}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(SelectionContainer);