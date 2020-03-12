import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";

const Layout31 = ({ classes, handleSelect }) => {
  let [seatArragement, setSeatArrangement] = useState([]);
  let [selectedSeats, setSelected] = useState([]);

  let dummyBookedSeats = [5, 10, 12];

  useEffect(() => {
    let totalSeats = 31;
    let seatsPerRow = 3;
    let seatRows = [];
    let pavementRow = 2;
    let totalRows = Math.floor(totalSeats / seatsPerRow);
    for (let i = 1; i <= totalRows; i++) {
      let row = [];
      let rowLength = i < totalRows ? seatsPerRow : seatsPerRow + 1;
      for (let j = i * seatsPerRow; row.length < rowLength; j--) {
        if (row.length === pavementRow && j < totalSeats - seatsPerRow)
          row.push("pavement");
        if (j === totalSeats - 1) row.push(totalSeats);
        row.push(j);
      }
      seatRows.push(row);
    }
    setSeatArrangement(seatRows);
  }, []);

  let onSeatSelect = e => {
    let seatNo = Number(e.target.innerText);
    let seatIndex = selectedSeats.indexOf(seatNo);
    if (dummyBookedSeats.includes(seatNo)) {
      return;
    }
    if (seatIndex !== -1) {
      selectedSeats.splice(seatIndex, 1);
    } else {
      selectedSeats = [...selectedSeats, seatNo];
    }
    setSelected(selectedSeats);
    handleSelect(selectedSeats);
  };

  return (
    <Grid container direction="row" justify="center">
      {/* <Grid item md={10} xs={12}> */}
      <ul className={classes.busLayoutContainer}>
        {/**Steering */}
        <li className={classes.steeringContainer}>
          <li>
            <label for="steering">
              <span className={classes.steering}></span>
            </label>
          </li>
        </li>
        {seatArragement.map(rows => {
          return (
            <li className={classes.seatRows}>
              {rows.map(seat => {
                let className = classes.unoccupiedSeat;
                if (seat === "pavement") className = classes.pavement;
                if (selectedSeats.includes(seat))
                  className = classes.selectedSeat;
                if (dummyBookedSeats.includes(seat))
                  className = classes.occupiedSeat;

                return (
                  <li>
                    <label for="seats">
                      <span className={className} onClick={onSeatSelect}>
                        {seat === "pavement" ? "" : seat}
                      </span>
                    </label>
                  </li>
                );
              })}
            </li>
          );
        })}
        {/**seat row 4 end*/}
      </ul>
      {/* </Grid> */}
    </Grid>
  );
};

export default withStyles(Styles)(Layout31);
