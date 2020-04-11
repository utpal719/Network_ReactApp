import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Styles } from "./Styles";
const Form = (props) => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <ForgotPasswordForm {...props} />
    </div>
  );
};
export default withStyles(Styles)(Form);
