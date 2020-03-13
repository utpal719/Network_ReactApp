import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import SelectionHeader from "./SelectionHeader/SelectionHeader";
import SelectionContainer from "./SelectionContainer/SelectionContainer";

const SeatSelection = ({ classes }) => {
  let { fare } = useSelector(state => state.bus);
  let [selectedSeats, setSelected] = useState(0);
  let [boardingPoint, setBoardingPoint] = useState("");
  let totalFare = selectedSeats.length * fare;

  let handleBoardingPoint = boardingPoint => setBoardingPoint(boardingPoint);

  let handleSelect = selected => {
    setSelected([...selected]);
  };

  return (
    <div className={classes.gridstyle}>
      <NavBar />
      <SelectionHeader />
      {/**SelectionFormContainer */}
      <SelectionContainer
        handleSelect={handleSelect}
        selectedSeats={selectedSeats}
        handleBoardingPoint={handleBoardingPoint}
        totalFare={totalFare}
      />
      <Footer />
    </div>
  );
};

export default withStyles(Styles)(SeatSelection);
