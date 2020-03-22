import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import AboutUs from "../../components/AboutUs/AboutUs";
const AboutUsPage = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};
export default withStyles(Styles)(AboutUsPage);
