import React from "react";
import { Grid, Typography, withStyles, Box } from "@material-ui/core";
import { Styles } from "../Styles";

const CancellationPolicy = ({ classes }) => {
  return (
    <Grid container className={classes.paddingTen}>
      <Grid item xs={4} className={classes.flexed}>
        <hr className={classes.centeredHr} />
      </Grid>
      <Grid item xs={4} className={classes.textCenter}>
        <Typography variant="subtitle1" color="textSecondary">
          Cancellation Policy
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.flexed}>
        <hr className={classes.centeredHr} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Whom should i call?</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="caption" color="textPrimary">
          <strong>For Boarding point and time related</strong>
        </Typography>
        <Typography variant="subtitle2">02812468022/ 2466424</Typography>
      </Grid>
      <Grid item xs={5}>
        <Box displayPrint="none">
          <Typography variant="caption" color="textPrimary">
            <strong>For cancellation and refunds related</strong>
          </Typography>
          <Typography variant="subtitle2">
            Click on this link for hassle free online cancellation
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="caption" color="textPrimary">
          <strong>For all queries</strong>
        </Typography>
        <Typography variant="subtitle2">
          Call 39412345 or write to us
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(CancellationPolicy);
