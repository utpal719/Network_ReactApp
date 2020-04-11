import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ChangePasswordForm from "./ChangePasswordForm";
import { Styles } from "./Styles";
const Form = props => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <ChangePasswordForm {...props} />
    </div>
  );
};
export default withStyles(Styles)(Form);
