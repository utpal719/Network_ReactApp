import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import { Styles } from "./Styles";

const FloatingBanner = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={2} direction="column" className={classes.bg}>
        <Grid item xs={12} className={classes.gitem}>
          Established in 1992, first Government of India recognized tour
          operator in Northeast India. Best rates and comprehensive packages for
          private
          <br />
          holidays. Tailor-made itineraries for special interest groups -
          birding, wildlife and nature, tribal culture, tea tourism, river
          cruise etc.
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(FloatingBanner);
