import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
import logo1 from "./../../images/bhutan.jpg";
import logo2 from "./../../images/brahmaputra.jpg";
import logo3 from "./../../images/myanmar.jpg";
import logo4 from "./../../images/ne.jpg";

const TopDestinationBanner = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <Typography variant="h4" color="textSecondary" className={classes.header}>
        Top Holiday Destination
      </Typography>
      <Grid container spacing={4} direction="row" className={classes.bg}>
        <Grid item xs={3} className={classes.gitem}>
          <div className={classes.imgHolder}>
            <img
              src={logo1}
              alt="bhutan-img"
              className={classes.imageStyle}
            ></img>
          </div>
          <Typography color="textSecondary" variant="h5">
            Bhutan
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Bhutan Tour Itinerary
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <div className={classes.imgHolder}>
            <img
              src={logo2}
              alt="Brahmaputra-img"
              className={classes.imageStyle}
            ></img>
          </div>
          <Typography color="textSecondary" variant="h5">
            Brahmaputra
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Brahmaputra Explorer
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <div className={classes.imgHolder}>
            <img
              src={logo3}
              alt="Myanmar-img"
              className={classes.imageStyle}
            ></img>
          </div>
          <Typography color="textSecondary" variant="h5">
            Myanmar
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Myanmar Itinerary
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <div className={classes.imgHolder}>
            <img src={logo4} alt="NE-img" className={classes.imageStyle}></img>
          </div>
          <Typography color="textSecondary" variant="h5">
            North-East
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Northeast India Itinerary
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(TopDestinationBanner);
