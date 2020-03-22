import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};
export default withStyles(Styles)(PrivacyPolicyPage);
