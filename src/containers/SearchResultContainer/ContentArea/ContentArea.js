import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import Filter from "../Filter/Filter";
import { Styles } from "./Styles";
import SearchContent from "../SearchContent/SearchContent";

const ContentArea = ({ classes, response, data: search }) => {
    return (
        <div className={classes.section}>
            <Grid container justify="center">
                <Grid item xs={11}>
                    <Grid container direction="row" spacing={2}>
                        <Filter />
                        <SearchContent response={response} search={search} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(Styles)(ContentArea);