import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
const AboutUsPage = () => {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Footer />
    </div>
  );
};
export default withStyles(Styles)(AboutUsPage);
