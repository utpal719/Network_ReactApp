import React from "react";
import PrintTicketForm from "./PrintTicketForm";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
const PrintTicketPage = props => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <PrintTicketForm />
    </div>
  );
};

export default withStyles(Styles)(PrintTicketPage);
