import React, { useEffect, useState } from "react";
import BookingTitle from "./BookingTitle/BookingTitle";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import ContentArea from "./ContentArea/ContentArea";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBuses } from "../../apis/buses";
import moment from "moment";
import Constants from "../../redux/actionConstants";

/**
 * @author: Samudra Deka
 * @param:
 * @description:this function is used to display bus search results
 *
 */

function SearchResult(props) {
  let { classes } = props;
  let { to: toCity, from: fromCity, date } = useSelector(state => state.search);
  let dispatch = useDispatch();
  let [response, setResponse] = useState([]);
  let history = useHistory();
  let data = {
    from: fromCity,
    to: toCity,
    noOfBuses: response.length || 0,
    date: date
  };

  useEffect(() => {
    if (history.action === "POP") {
      history.push("/");
    }
    /**
     * Get all buses
     */
    (async () => {
      let data = await getBuses({
        fromCity: fromCity,
        toCity: toCity,
        journeyDate: moment(date).format("M d,YYYY")
      });
      dispatch({
        type: Constants.SET_BUS_SEARCH_DATA,
        payload: { busData: data }
      });

      setResponse(data);
      props.stopLoading();
    })();
  }, []);

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
