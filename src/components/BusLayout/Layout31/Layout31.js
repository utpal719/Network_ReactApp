import React from "react";
import steering from "../steering.png";
import { Grid } from "@material-ui/core";

const Layout = () => {
    let seatCapacity = 31;
    let rows = 4;
    let blankRow = 2;

    return (
        <Grid container direction="col">
            <Grid item xs={1}>
                <img src={steering} alt="steering"></img>
            </Grid>
        </Grid>
    )
}

export default Layout;