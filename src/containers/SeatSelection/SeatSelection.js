import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import SelectionHeader from "./SelectionHeader/SelectionHeader";
import SelectionContainer from "./SelectionContainer/SelectionContainer";
import { useHistory } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

const SeatSelection = ({ classes }) => {
  let { fare } = useSelector((state) => state.bus);
  let [selectedSeats, setSelected] = useState([]);
  let totalFare = selectedSeats.length * fare;
  /**Get percentage of commission of agent*/
  let { percentage } = useSelector((state) => state.user);
  let agentFare = percentage ? totalFare - totalFare * (percentage / 100) : 0;

  let history = useHistory();

  useEffect(() => {
    if (history.action === "POP") {
      history.push("/");
    }
  }, []);

  let handleSelect = (selected) => {
    setSelected([...selected]);
  };

  return (
    <div className={classes.gridstyle}>
      <SelectionHeader />
      {/**SelectionFormContainer */}
      <Preloader
        handleSelect={handleSelect}
        selectedSeats={selectedSeats}
        totalFare={totalFare}
        agentFare={agentFare}
        Component={SelectionContainer}
      />
    </div>
  );
};

export default withStyles(Styles)(SeatSelection);
