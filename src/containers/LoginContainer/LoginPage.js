import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";
import { Styles } from "./Styles";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
const Form = props => {
  const { classes } = props;
  return (
    <ErrorBoundary>
    <div className={classes.bg}>
      <LoginForm />
    </div>
    </ErrorBoundary>
  );
};
export default withStyles(Styles)(Form);
