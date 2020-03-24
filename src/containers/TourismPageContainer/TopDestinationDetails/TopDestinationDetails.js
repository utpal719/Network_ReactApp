import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import { Styles } from "./Styles";
import Pdf from "./../../../pdf/NetworkTravel.pdf"

const TopDestinationDetails = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={2} direction="row" className={classes.bg}>
        <Grid item xs={3} className={classes.gitem}>
          <p>
            Those fortunate enough to visit Bhutan describe it as a unique,
            deeply spiritual and mystical experience.
            <a href = {Pdf} target = "_blank" className={classes.navlink}>Know More..</a>
          </p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <p>
            We pride ourselves in providing custom itineraries for all!
            <a href = {Pdf} target = "_blank" className={classes.navlink}>Know More..</a>
          </p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <p>
            It's a country that fuels your emotions, stimulates your senses and
            stays in your soul.
            <a href = {Pdf} target = "_blank" className={classes.navlink}>Know More..</a>
          </p>
        </Grid>
        <Grid item xs={3} className={classes.gitem}>
          <p>
            Fresh mountain air, charming people, Buddhist monasteries and prayer
            flags dot the pristine landscape and home of Khangchendzonga - the
            world's third highest mountain
            <a href = {Pdf} target = "_blank" className={classes.navlink}>Know More..</a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(TopDestinationDetails);
