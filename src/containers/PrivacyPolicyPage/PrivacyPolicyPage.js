import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const PrivacyPolicyPage = () => {
  return (
    <ErrorBoundary>
    <div>
      <PrivacyPolicy />
    </div>
    </ErrorBoundary>
  );
};
export default withStyles(Styles)(PrivacyPolicyPage);
