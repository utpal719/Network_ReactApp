import React, { useState } from "react";
import {
  Grid,
  withStyles,
  Typography,
  Paper,
  Chip,
  Avatar
} from "@material-ui/core";
import { Styles } from "../Styles";
import { SupervisedUserCircle } from "@material-ui/icons";
import PassengerDetails from "../PassengerDetails/PassengerDetails";
const PassengerDetailContainer = ({
  classes,
  ticket,
  selectable,
  handleSelect
}) => {
  let [selectedPassengers, setSelected] = useState([]);
  let [isAllSelected, setAllSelected] = useState(false);

  let handlePassengerSelect = passengerIndex => {
    let indexInSelectedPassenger = selectedPassengers.indexOf(passengerIndex);
    if (indexInSelectedPassenger !== -1) {
      selectedPassengers.splice(indexInSelectedPassenger, 1);
    } else {
      selectedPassengers = [...selectedPassengers, passengerIndex];
    }
    setSelected([...selectedPassengers]);
    handleSelect(selectedPassengers);
  };

  let handleSelectAll = _ => {
    let totalPassengers = ticket.passengerList.length;
    let passengersIndexes = [];
    if (!isAllSelected) {
      for (let i = 0; i < totalPassengers; i++) {
        passengersIndexes.push(i);
      }
    }
    setAllSelected(!isAllSelected);
    setSelected([...passengersIndexes]);
    handleSelect([...passengersIndexes]);
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6" style={{ display: "flex" }}>
          <SupervisedUserCircle fontSize="large" color="secondary" />
          &nbsp;Passenger Details
        </Typography>
      </Grid>
      {/**Passenger details */}
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Grid container direction="row" spacing={3}>
            {selectable && (
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} className={classes.flexed}>
                    <Chip
                      className={classes.selectAll}
                      label={"Select all"}
                      onClick={handleSelectAll}
                      color="primary"
                      avatar={
                        <Avatar>
                          <input
                            type="checkbox"
                            className={classes.marginAuto}
                            checked={isAllSelected}
                          ></input>
                        </Avatar>
                      }
                    />
                  </Grid>
                  {/* <Grid item xs={11}>
                    <Typography variant="caption">Select all</Typography>
                  </Grid> */}
                </Grid>
              </Grid>
            )}
            {(ticket.passengerList || []).map((passenger, index) => (
              <PassengerDetails
                key={index}
                index={index}
                passenger={passenger}
                selectable={selectable}
                selectedPassengers={selectedPassengers}
                isAllSelected={isAllSelected}
                handleSelect={handlePassengerSelect}
              />
            ))}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default withStyles(Styles)(PassengerDetailContainer);
