import React from "react";
import Form from "./../../components/Form/Form";
import FloatingBanner from "./FloatingBanner/FloatingBanner";
import TopDestinationBanner from "./../../components/TopDestinationBanner/TopDestinationBanner";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import CaraouselBanner from "./CarouselBanner/CaraouselBanner";
import Preloader from "../../components/Preloader/Preloader";

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Preloader Component={Form} />
      <FloatingBanner />
      <CaraouselBanner />
      <TopDestinationBanner />
    </div>
  );
};

export default withStyles(Styles)(HomePage);
