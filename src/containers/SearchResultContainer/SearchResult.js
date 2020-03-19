import React, { useEffect, useState } from "react";
import BookingTitle from "./BookingTitle/BookingTitle";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import ContentArea from "./ContentArea/ContentArea";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * @author: Samudra Deka
 * @param:
 * @description:this function is used to display bus search results
 *
 */

function SearchResult(props) {
  let { classes } = props;
  let { to: toCity, from: fromCity, date } = useSelector(state => state.search);

  let [response, setResponse] = useState([]);
  let busSearchData = useSelector(state => state.busSearchData);
  let history = useHistory();
  let data = {
    from: fromCity,
    to: toCity,
    noOfBuses: busSearchData.length || 0,
    date: date
  };

  useEffect(() => {
    if (history.action === "POP") {
      history.push("/");
    }
    setResponse(busSearchData);
  }, [busSearchData]);

  return (
    <div className={classes.gridstyle}>
      <NavBar />
      <BookingTitle data={data} />
      <ContentArea response={response} data={data} />
      <Footer />
    </div>
  );
}

export default withStyles(Styles)(SearchResult);
