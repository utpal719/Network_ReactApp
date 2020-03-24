import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Styles } from "../Styles";

const ImportantContacts = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.paddingTen}
      style={{ background: "#333" }}
    >
      <Grid item xs={12}>
        <Typography variant="subtitle1" style={{ color: "#eee" }}>
          Important Numbers
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="caption"
          color="textPrimary"
          style={{ color: "#fff" }}
        >
          <strong>PH : 8811079999, 7086093241</strong>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="caption"
          color="textPrimary"
          style={{ color: "#fff" }}
        >
          <strong>ISBT Guwahati : 7086018977</strong>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="caption"
          color="textPrimary"
          style={{ color: "#fff" }}
        >
          <strong>Barak Valley : 9854037111,7086054040</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(ImportantContacts);
