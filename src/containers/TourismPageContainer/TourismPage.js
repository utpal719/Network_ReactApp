import React from "react";
import cover from "./ne1.jpg";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import TourismPageLayout from "./TourismPageLayout";
const TourismPage = props => {
  const { classes } = props;
  return (
    <div className={classes.div}>
      <img src={cover} alt="image" className={classes.img}></img>
      <TourismPageLayout />
    </div>
  );
};
export default withStyles(Styles)(TourismPage);
