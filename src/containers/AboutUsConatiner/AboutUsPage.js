import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import AboutUs from "../../components/AboutUs/AboutUs";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const AboutUsPage = () => {
  return (
    <ErrorBoundary>
    <div>
      <AboutUs />
    </div>
    </ErrorBoundary>
  );
};
export default withStyles(Styles)(AboutUsPage);
