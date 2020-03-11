import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";

function BookingTitle(props) {
    let { classes, data: { from, to, noOfBuses, noOfPassengers, date } } = props;
    return (
        <div>
            <Grid container direction="row" justify="center">
                <Grid item xs={11} className={classes.bookingTitle}>
                    <p>
                        {noOfBuses} Buses from {from} to {to} on {date} for {noOfPassengers} adults
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(Styles)(BookingTitle)