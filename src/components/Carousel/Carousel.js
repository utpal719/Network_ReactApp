import React from "react";
import Slider from "infinite-react-carousel";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import A from "./../../images/A.png";
import B from "./../../images/B.png";
import C from "./../../images/C.png";
const Carousel = props => {
  const { classes } = props;
  return (
    <div>
      <Slider
        centerMode={true}
        arrows={false}
        dots={true}
        adaptiveHeight="true"
        centerPadding={0}
        autoplay={true}
        className={classes.slider}
      >
        <div>
          <img src={A} alt="ONE" className={classes.imageStyle} />
        </div>
        <div>
          <img src={B} alt="TWO" className={classes.imageStyle} />
        </div>
        <div>
          <img src={C} alt="THREE" className={classes.imageStyle} />
        </div>
      </Slider>
    </div>
  );
};
export default withStyles(Styles)(Carousel);
