import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
import bus80 from "../../../images/bus-80.png";
import bus81 from "../../../images/bus-81.png";
import bus82 from "../../../images/bus-82.png";

const FloatingBanner = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={2} className={classes.bg}>
        <Grid item xs={4} className={classes.textCenter}>
          <img src={bus80} alt="bus80"></img>
          <Typography variant="subtitle1" color="textSecondary">
            20 Buses
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.textCenter}>
          <img src={bus81} alt="bus81"></img>
          <Typography variant="subtitle1" color="textSecondary">
            Best Travel Agents
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.textCenter}>
          <img src={bus82} alt="bus82"></img>
          <Typography variant="subtitle1" color="textSecondary">
            Trust & Safety
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} className={classes.gitem}>
          <Typography variant="subtitle2" component="h6">
            Established in 1992, first Government of India recognized tour
            operator in Northeast India. Best rates and comprehensive packages
            for private
            <br />
            holidays. Tailor-made itineraries for special interest groups -
            birding, wildlife and nature, tribal culture, tea tourism, river
            cruise etc.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(FloatingBanner);
