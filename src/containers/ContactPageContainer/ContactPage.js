import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import ContactUsLayout from "./ContactUsLayout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const ContactPage = () => {
  return (
    <ErrorBoundary>
    <div>
      <ContactUsLayout />
    </div>
    </ErrorBoundary>
  );
};
export default withStyles(Styles)(ContactPage);
