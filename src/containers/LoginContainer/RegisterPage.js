import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Register from "./Register";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import Preloader from "../../components/Preloader/Preloader";

const RegisterPage = props => {
  const { classes } = props;
  return (
    <div className={classes.bg}>
      <NavBar />
      <Preloader defaultLoading={false} Component={Register}/>
    </div>
  );
};
export default withStyles(Styles)(RegisterPage);
