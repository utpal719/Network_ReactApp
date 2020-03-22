import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import RefundPolicy from "../../components/RefundPolicy/RefundPolicy";
const RefundPolicyPage = () => {
  return (
    <div>
      <RefundPolicy />
    </div>
  );
};
export default withStyles(Styles)(RefundPolicyPage);
