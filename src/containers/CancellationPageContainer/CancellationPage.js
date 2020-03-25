import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import CancellatiohHeader from "./CancellatiohHeader";
import CancellationForm from "./CancellationForm";
import CancellationPolicy from "./CancelationPolicy";
import { Grid } from "@material-ui/core";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const CancellationPage = props => {
  const { classes } = props;
  return (
    <ErrorBoundary>
    <div>
      <Grid conatiner direction="row" className={classes.bg}>
        <Grid item xs={12}>
          <CancellatiohHeader />
        </Grid>
        <Grid item xs={12}>
          <CancellationForm />
        </Grid>
        <Grid item xs={12}>
          <CancellationPolicy />
        </Grid>
      </Grid>
    </div>
    </ErrorBoundary>
  );
};

export default withStyles(Styles)(CancellationPage);
