import React from "react";
import {
  TextField,
  MenuItem,
  Button,
  Select,
  Grid,
  OutlinedInput,
  InputLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Register from "./Register";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
const RegisterPage = props => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <NavBar />
      <Register />
    </div>
  );
};
export default withStyles(Styles)(RegisterPage);
