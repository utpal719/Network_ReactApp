import React from "react";
import PrintTicketForm from "./PrintTicketForm";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const PrintTicketPage = props => {
  const { classes } = props;
  return (
    <ErrorBoundary>
    <div className={classes.bg}>
      <PrintTicketForm />
    </div>
    </ErrorBoundary>
  );
};

export default withStyles(Styles)(PrintTicketPage);
