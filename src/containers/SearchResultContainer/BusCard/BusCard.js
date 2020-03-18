import React from "react";
import { Paper, Grid, Typography, Button, withStyles } from "@material-ui/core";
import avatar from "./n1.png";
import { Styles } from "./Styles";
import { DirectionsBus, AccessTime } from "@material-ui/icons";

const BusCard = ({ classes, data: bus, handleClick }) => {
  return (
    <Paper variant="outlined" className={classes.busPaper}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} className={classes.textAlignCenter}>
          <img src={avatar} alt="avatar" className={classes.avatar} />
          <Typography variant="subtitle2">Network Travels</Typography>
        </Grid>
        <Grid item xs={6} md={2} className={classes.textAlignCenter}>
          <Grid container direction="row">
            <Grid item xs={12} className={classes.textAlignCenter}>
              <DirectionsBus />
            </Grid>
            <Grid item xs={12}>
              <Typography>{bus.startTime}</Typography>
              <Typography variant="caption">
                {bus.fromCity.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={2} className={classes.textAlignCenter}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <DirectionsBus />
            </Grid>
            <Grid item xs={12}>
              <Typography>{bus.endtime}</Typography>
              <Typography variant="caption">
                {bus.toCity.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={2} className={classes.textAlignCenter}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <AccessTime />
            </Grid>
            <Grid item xs={12}>
              <Typography>{bus.travelTime}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h5">&#8377;{bus.fare}</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            onClick={() =>
              handleClick({
                busId: bus.busId,
                midId: bus.midId,
                startTime: bus.startTime,
                endtime: bus.endtime,
                seatCapacity: bus.seatCapacity,
                fare: bus.fare
              })
            }
            style={{
              backgroundColor: "#edd31c",
              color: "black",
              fontWeight: "600"
            }}
          >
            Select Seat
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(Styles)(BusCard);
