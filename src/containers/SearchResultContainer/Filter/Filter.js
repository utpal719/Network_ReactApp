import React from "react";
import { Styles } from "./Styles";
import { Grid, Paper, Checkbox, FormControlLabel, Typography, withStyles, FormLabel, Divider } from "@material-ui/core";
const Filter = ({ classes }) => {
    return (
        <Grid item xs={12} md={2}>
            <Paper elevation={2} className={classes.filter}>
                <FormLabel component="legend">
                    <Typography variant="h5" className={classes.fontWhite}>Filter By </Typography>
                    <Typography variant="caption" className={classes.caption}>Bus type</Typography>
                </FormLabel>
                <Divider ></Divider>
                <FormControlLabel className={classes.checkbox} control={
                    <Checkbox
                        value="ac"
                        color="default"
                    />
                }
                    label="AC"
                />
                <FormControlLabel className={classes.checkbox} control={
                    <Checkbox
                        value="nonac"
                        color="default"
                    />
                }
                    label="NON-AC"
                />
            </Paper>
        </Grid>
    )
}

export default withStyles(Styles)(Filter);