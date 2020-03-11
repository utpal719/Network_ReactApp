import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import SelectionHeader from "./SelectionHeader/SelectionHeader";

const SeatSelection = ({ classes }) => {
    let busData = useSelector(state => state.bus);
    console.log(busData)
    return (
        <div className={classes.gridstyle}>
            <NavBar />
            <SelectionHeader />
            <Footer />
        </div>
    )
}

export default withStyles(Styles)(SeatSelection)