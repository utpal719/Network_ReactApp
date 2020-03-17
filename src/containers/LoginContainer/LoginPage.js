import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
const Form = props => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <NavBar />
      <LoginForm />
    </div>
  );
}; 
export default withStyles(Styles)(Form);
