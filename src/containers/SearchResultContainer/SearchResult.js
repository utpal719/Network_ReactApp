import React, { useEffect, useState } from "react";
import BookingTitle from "./BookingTitle/BookingTitle";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import Form from "./Form/Form";
import ContentArea from "./ContentArea/ContentArea";
import dummyResponse from "./dummyResponse";
import { useDispatch } from "react-redux";
import Constants from "../../redux/actionConstants";

function SearchResult(props) {
    let { classes } = props;
    let data = { from: "Guwahati", to: "Tinsukia", noOfBuses: 0, noOfPassengers: 1, date: new Date().toDateString() }
    let [response, setResponse] = useState([]);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: Constants.SET_SEARCH,
            payload: {
                from: data.from,
                to: data.to,
                date: data.date
            }
        });
        setResponse(dummyResponse);
    }, [])
    return (
        <div className={classes.gridstyle}>
            <NavBar />
            <BookingTitle data={data} />
            <Form data={data} />
            <ContentArea response={response} data={data} />
            <Footer />
        </div>
    )
}

export default withStyles(Styles)(SearchResult);