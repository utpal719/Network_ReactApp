import React from "react";
import { Grid } from "@material-ui/core";
import SortMenu from "../SortMenu/SortMenu";
import SearchModal from "../SearchModal/SearchModal";
import { useHistory } from "react-router-dom";
import BusCard from "../BusCard/BusCard";
import { useDispatch } from "react-redux";
import Constants from "../../../redux/actionConstants";

const SearchContent = ({ response, search }) => {
  let dispatch = useDispatch();
  let history = useHistory();

  let handleClick = ({
    busId,
    midId,
    startTime,
    endTime,
    seatCapacity,
    fare
  }) => {
    dispatch({
      type: Constants.BUS_SELECT,
      payload: {
        busId,
        midId,
        startTime,
        endTime,
        seatCapacity,
        fare
      }
    });
    /**redirect to seat selection page */
    history.push("/seatSelection");
  };

  return (
    <Grid item xs={12} md={10}>
      <Grid container direction="column">
        {response.map((data, index) => (
          <BusCard key={index} data={data} handleClick={handleClick} />
        ))}
      </Grid>
    </Grid>
  );
};

export default SearchContent;
