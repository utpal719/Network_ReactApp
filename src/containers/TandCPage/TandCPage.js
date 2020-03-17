import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import TandC from "../../components/TandC/TandC";
const TandCPage = () => {
  return (
    <div>
      <NavBar />
      <TandC />
      <Footer />
    </div>
  );
};
export default withStyles(Styles)(TandCPage);
