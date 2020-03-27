import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Styles } from "../Styles";

const AppLink = ({ classes }) => {
  return (
    <Grid item xs={12}>
      <a href="http://techvariable.com" target="_blank">
        <img
          className={classes.appLinkImage}
          alt="appLink"
          src="http://www.techvariable.com/database/banner.png"
        />
      </a>
    </Grid>
  );
};

export default withStyles(Styles)(AppLink);
