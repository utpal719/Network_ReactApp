import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  withStyles,
  Grid,
  Typography,
  Button,
  Paper,
  Select,
} from "@material-ui/core";
import { Styles } from "../Styles";
import { CalendarToday } from "@material-ui/icons";
import Layout from "../../../components/BusLayout/Layout/Layout";
import Actions from "../../../redux/actionConstants";
import { useHistory } from "react-router-dom";
import { getBusDetailsById } from "../../../apis/buses";

const SelectionContainer = ({
  classes,
  handleSelect,
  selectedSeats,
  totalFare,
  agentFare,
  stopLoading,
}) => {
  let dispatch = useDispatch();
  let history = useHistory();
  let searchData = useSelector((state) => state.search);
  let [boardingPoints, setBoardingPoints] = useState([]);
  let [occupiedSeats, setOccupiedSeats] = useState([]);
  let [boardingPoint, setBoardingPoint] = useState(0);

  let { seatCapacity = 32, busId, midId: isMid } = useSelector(
    (state) => state.bus
  );

  useEffect(() => {
    (async () => {
      let data = await getBusDetailsById({
        journeyDate: searchData.date,
        busId,
        isMid: isMid || 0,
      });
      if (data) {
        let boardingPoints = data.bus.boardingPoints;
        if (boardingPoints) {
          boardingPoint = boardingPoints.split(",");
          setBoardingPoints(boardingPoint);
        }
        setOccupiedSeats(data.occupiedSeat);
      }
      stopLoading();
    })();
  }, []);

  let handleBoardingSelect = (e) => {
    let boardingPoint = e.target.value;
    setBoardingPoint(boardingPoint);
    dispatch({
      type: Actions.SET_BOARDING_POINT,
      payload: { boardingPoint: boardingPoints[boardingPoint - 1] },
    });
  };

  let handleContinue = () => {
    dispatch({
      type: Actions.SET_FARE,
      payload: { fare: totalFare, agentFare: agentFare },
    });
    dispatch({ type: Actions.SET_SEATS, payload: { seats: selectedSeats } });
    history.push("/booking");
  };

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
                occupied={occupiedSeats}
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
                      {agentFare ? (
                        <Typography variant="subtitle1">
                          Agent Fare : &#8377;{agentFare}
                        </Typography>
                      ) : null}
                      <Typography variant="subtitle1">
                        Total Fare : &#8377;{totalFare}
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
                    {boardingPoints.map((points, index) => {
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
                    disabled={
                      !(Boolean(selectedSeats.length) && Boolean(boardingPoint))
                    }
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
