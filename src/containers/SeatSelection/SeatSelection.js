import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withStyles, Grid } from "@material-ui/core";
import { Styles } from "./Styles";
import SelectionHeader from "./SelectionHeader/SelectionHeader";

const SeatSelection = ({ classes }) => {
    let busData = useSelector(state => state.bus);

    return (
        <div className={classes.gridstyle}>
            <NavBar />
            <SelectionHeader />
            {/**SelectionFormContainer */}
            <Grid container direction="column"></Grid>
            <Footer />
        </div>
    )
}

export default withStyles(Styles)(SeatSelection)