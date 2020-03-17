import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../../components/Footer/Footer";
const PrivacyPolicyPage = () => {
  return (
    <div>
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};
export default withStyles(Styles)(PrivacyPolicyPage);
