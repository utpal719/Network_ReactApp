import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import { Styles } from "./Styles";
import logo1 from "./../../images/bhutan.jpg";
import logo2 from "./../../images/brahmaputra.jpg";
import logo3 from "./../../images/myanmar.jpg";
import logo4 from "./../../images/ne.jpg";

const TopDestinationBanner = props => {
  const { classes } = props;
  return (
    <div>
      <h2 className={classes.header}>TOP HOLIDAY DESTINATION</h2>
      <Grid container spacing={2} direction="row" className={classes.bg}>
        <Grid item xs={3} className={classes.gitem}>
          <img
            src={logo1}
            alt="bhutan-img"
            className={classes.imageStyle}
          ></img>
          <p>Bhutan Tour Itinerary</p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <img
            src={logo2}
            alt="Brahmaputra-img"
            className={classes.imageStyle}
          ></img>
          <p>Brahmaputra Explorer</p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <img
            src={logo3}
            alt="Myanmar-img"
            className={classes.imageStyle}
          ></img>
          <p>Myanmar Itinerary</p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <img src={logo4} alt="NE-img" className={classes.imageStyle}></img>
          <p>Northeast India Itinerary</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(TopDestinationBanner);
