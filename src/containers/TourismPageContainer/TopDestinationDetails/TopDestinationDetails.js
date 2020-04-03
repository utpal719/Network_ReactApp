import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
import Pdf from "./../../../pdf/NetworkTravel.pdf";

const TopDestinationDetails = props => {
  const { classes } = props;
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        className={classes.bg}
        justify="center"
      >
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.padLR50}>
            <Grid item xs={3} className={classes.gitem}>
              <Typography variant="subtitle2">
                Those fortunate enough to visit Bhutan describe it as a unique,
                deeply spiritual and mystical experience.<br></br>
                <a href={Pdf} target="_blank" className={classes.navlink}>
                  Know More..
                </a>
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.gitem}>
              <Typography variant="subtitle2">
                We pride ourselves in providing custom itineraries for all!
                <br></br>
                <a href={Pdf} target="_blank" className={classes.navlink}>
                  Know More..
                </a>
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.gitem}>
              <Typography variant="subtitle2">
                It's a country that fuels your emotions, stimulates your senses
                and stays in your soul.<br></br>
                <a href={Pdf} target="_blank" className={classes.navlink}>
                  Know More..
                </a>
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.gitem}>
              <Typography variant="subtitle2">
                Fresh mountain air, charming people, Buddhist monasteries and
                prayer flags dot the pristine landscape and home of
                Khangchendzonga - the world's third highest mountain<br></br>
                <a href={Pdf} target="_blank" className={classes.navlink}>
                  Know More..
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(TopDestinationDetails);
