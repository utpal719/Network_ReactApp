import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import ContactUsLayout from "./ContactUsLayout";
import Footer from "../../components/Footer/Footer";
const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ContactUsLayout />
      <Footer />
    </div>
  );
};
export default withStyles(Styles)(ContactPage);
