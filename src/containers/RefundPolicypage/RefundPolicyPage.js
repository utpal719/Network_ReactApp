import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import RefundPolicy from "../../components/RefundPolicy/RefundPolicy";
import Footer from "../../components/Footer/Footer";
const RefundPolicyPage = () => {
  return (
    <div>
      <NavBar />
      <RefundPolicy />
      <Footer />
    </div>
  );
};
export default withStyles(Styles)(RefundPolicyPage);
