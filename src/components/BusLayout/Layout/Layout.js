import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import { Config as LayoutConfig } from "./Layout.config";

const LogicalLayout = ({ classes, handleSelect, seatCapacity, occupied }) => {
  let [seatArragement, setSeatArrangement] = useState([]);
  let [selectedSeats, setSelected] = useState([]);
  let [sleeperSeats, setSleeperSeatArrangement] = useState([]);

  let dummyBookedSeats = occupied;

  let logicalArrangement = [31, 32, 34];
  let sleeperBusArrangement = [60];

  useEffect(() => {
    /**If layout is a logical arrangement (31,32,34) */
    if (logicalArrangement.includes(seatCapacity)) {
      let {
        seatPerRow,
        pavementStart,
        pavementSpan,
        seatsLastRow
      } = LayoutConfig[seatCapacity];
      let totalSeats = seatCapacity;
      let totalColumn = Math.floor(totalSeats / seatPerRow);
      let seatRows = [];
      for (let i = 1; i <= totalColumn; i++) {
        let row = [];
        let seatCount = i === totalColumn ? seatsLastRow : seatPerRow;
        for (let j = seatCount * i; row.length <= seatCount - 1; j--) {
          let seatNo = j;
          if (pavementStart === row.length && i !== totalColumn) {
            for (
              let pavementCount = 0;
              pavementCount < pavementSpan;
              pavementCount++
            ) {
              row.push("pavement");
            }
          }
          if (i === totalColumn) seatNo = j - pavementSpan * (totalColumn - 1);
          row.push(seatNo);
        }
        seatRows.push(row);
      }
      setSeatArrangement(seatRows);
    } else {
      /**If layout is hard layout */
      let seatLayout = LayoutConfig[seatCapacity];
      if (sleeperBusArrangement.includes(seatCapacity)) {
        seatLayout = seatLayout[0];
        setSleeperSeatArrangement(LayoutConfig[seatCapacity][1]);
      }
      setSeatArrangement(seatLayout);
    }
  }, []);

  let handleSelection = seatNo => {
    let seatIndex = selectedSeats.indexOf(seatNo);
    if (dummyBookedSeats.includes(seatNo)) {
      return;
    }
    if (seatNo === 0) {
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

  let onSeatSelect = e => {
    let seatNo = Number(e.target.innerText);
    handleSelection(seatNo);
  };

  let onSleeperSeatSelect = e => {
    let seatNo = e.target.innerText;
    handleSelection(seatNo);
  };

  return (
    <Grid container direction="row" justify="center">
      <ul className={classes.busLayoutContainer}>
        {/**Steering */}
        <li className={classes.steeringContainer}>
          <div>
            <span className={classes.steering}></span>
          </div>
        </li>
        {seatArragement.map((rows, index) => {
          return (
            <li key={index} className={classes.seatRows}>
              {rows.map(seat => {
                let className = classes.unoccupiedSeat;
                if (seat === "pavement") className = classes.pavement;
                if (seat === "") className = classes.blank;
                if (selectedSeats.includes(seat))
                  className = classes.selectedSeat;
                if (dummyBookedSeats.includes(seat))
                  className = classes.occupiedSeat;

                return (
                  <div key={seat}>
                    <span className={className} onClick={onSeatSelect}>
                      {seat === "pavement" ? "" : seat}
                    </span>
                  </div>
                );
              })}
            </li>
          );
        })}
        {/**seat row 4 end*/}
      </ul>
      <br></br>
      {/**Sleeper row arrangement */}
      {sleeperSeats.length ? (
        <ul className={classes.busLayoutContainer}>
          {/**Steering */}
          <li className={classes.steeringContainer}>
            <div>
              <span className={classes.steering}></span>
            </div>
          </li>
          {sleeperSeats.map((rows, index) => {
            return (
              <li key={index} className={classes.seatRows}>
                {rows.map(seat => {
                  let className = classes.sleeperUnoccupied;
                  if (seat === "pavement") className = classes.pavement;
                  if (seat === "") className = classes.blank;
                  if (selectedSeats.includes(seat))
                    className = classes.sleeperSelected;

                  return (
                    <div key={seat}>
                      <span className={className} onClick={onSleeperSeatSelect}>
                        {seat === "pavement" ? "" : seat}
                      </span>
                    </div>
                  );
                })}
              </li>
            );
          })}
          {/**seat row 4 end*/}
        </ul>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default withStyles(Styles)(LogicalLayout);
