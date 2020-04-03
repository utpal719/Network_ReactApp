import React, { useRef, useEffect } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
import Carousel from "../../../components/Carousel/Carousel";
import logo from "./../../../images/googleplay.png";
import luxury from "./../../../images/70-1.png";
import essence from "./../../../images/70-2.png";
import trans from "./../../../images/70-3.png";
const CarouselBanner = props => {
  const { classes } = props;
  let bg = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function() {
      let pageY = window.scrollY;
      console.log(pageY);
      if (bg.current) {
        bg.current.style.setProperty(
          "background-position-y",
          `${pageY * -0.15}px`
        );
      }
    });
  }, [window.scrollY, bg.current]);

  return (
    <div className={classes.bg} ref={bg}>
      <Grid
        container
        direction="row"
        spacing={2}
        className={classes.gridStyles}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={3} className={classes.inner}>
          <Carousel />
          <img src={logo} alt="logo" className={classes.imageStyle} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={11} className={classes.inner}>
                  <img
                    src={luxury}
                    alt="luxury logo"
                    className={classes.infoGraph}
                  />
                  <Typography variant="subtitle1">
                    <strong>LUXURY</strong>
                  </Typography>
                  <Typography variant="subtitle2" component="h6">
                    Booking bus tickets will never be a cause of concern!
                    Hassle-free booking and instant confirmation.
                  </Typography>
                </Grid>
                <Grid item xs={11} className={classes.inner}>
                  <img
                    src={trans}
                    alt="trans logo"
                    className={classes.infoGraph}
                  />
                  <Typography variant="subtitle1">
                    <strong>ESSENCE</strong>
                  </Typography>
                  <Typography variant="subtitle2" component="h6">
                    Clean and safe journey with a well trained and reliable
                    crew.
                  </Typography>
                </Grid>
                <Grid item xs={11} className={classes.inner}>
                  <img
                    src={essence}
                    alt="essence logo"
                    className={classes.infoGraph}
                  />
                  <Typography variant="subtitle1">
                    <strong>TRANSPERANCY</strong>
                  </Typography>
                  <Typography variant="subtitle2" component="h6">
                    Transperant transaction with convinient online payment
                    portal.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(CarouselBanner);
