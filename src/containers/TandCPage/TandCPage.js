import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
import TandC from "../../components/TandC/TandC";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const TandCPage = () => {
  return (
    <div>
      <TandC />
    </div>
  );
};
export default withStyles(Styles)(TandCPage);
