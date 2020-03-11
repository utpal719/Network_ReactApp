import React from "react";
import { withStyles, Typography, Grid, Paper } from "@material-ui/core";
import { AccessTime, Weekend, ArrowRightAlt } from "@material-ui/icons";
import { useSelector, useStore } from "react-redux";
import { Styles } from "./Styles";
import avatar from "./n1.png";

const SelectionHeader = ({ classes }) => {
    let { from, to, date } = useSelector(state => state.search);
    let { startTime, endtime, seatCapacity, fare } = useSelector(state => state.bus);
    console.log(useStore().getState())

    return (
        <div className={classes.section}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} md={10} >
                    <Paper elevation={2} className={classes.section}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={2}>
                                <img src={avatar} alt="avatar" className={classes.avatar}></img>
                                <Typography variant="subtitle2">Network travels</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Grid container direction="row" spacing={2}>
                                    <Grid item xs={2} className={classes.flexed}>
                                        <AccessTime fontSize="large" className={classes.centered} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" style={{ fontWeight: "600" }}>{from.toUpperCase()}</Typography>
                                        <Typography variant="caption">{startTime}</Typography>
                                    </Grid>
                                    <Grid item xs={2} className={classes.flexed} style={{ textAlign: "left" }}>
                                        <ArrowRightAlt fontSize="large" className={classes.centered} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" style={{ fontWeight: "600" }}>{to.toUpperCase()}</Typography>
                                        <Typography variant="caption">{endtime}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={4} >
                                <Grid container style={{ textAlign: "center" }}>
                                    <Grid item xs={4} md={12}>
                                        <Weekend fontSize="large" />
                                    </Grid>
                                    <Grid item xs={8} md={12}>
                                        <Typography variant="caption">{seatCapacity} seats</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography variant="h4">&#8377;{fare}
                                    <Typography variant="caption">/ person</Typography></Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(Styles)(SelectionHeader);