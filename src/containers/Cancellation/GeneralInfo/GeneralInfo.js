import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { Styles } from "../Styles";

const GeneralInfo = ({ classes, pnrNumber, journeyDate }) => {
  return (
    <>
      <Grid item xs={6} className={classes.textLeft}>
        <Typography variant="subtitle2">
          <strong>PNR :</strong> {pnrNumber}
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.textRight}>
        <Typography variant="subtitle2">
          <strong>Journey Date :</strong> {journeyDate}
        </Typography>
      </Grid>
    </>
  );
};

export default withStyles(Styles)(GeneralInfo);
