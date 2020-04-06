import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";
import { Styles } from "./Styles";
const Form = (props) => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <LoginForm {...props} />
    </div>
  );
};
export default withStyles(Styles)(Form);
