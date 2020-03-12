import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import logo from "./logo1.png";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  const { classes } = props;
  return (
    <AppBar>
      <Toolbar className={classes.navbar}>
        <img src={logo} alt="NETWORK" />
        <NavLink to="/home" style={{ textDecoration: "none", marginLeft: 50 }}>
          <Button color="inherit" className={classes.button}>
            HOME
          </Button>
        </NavLink>

        <NavLink to="/tourism" style={{ textDecoration: "none" }}>
          <Button color="inherit" className={classes.button}>
            TOURISM
          </Button>
        </NavLink>

        <NavLink to="/cancellation" style={{ textDecoration: "none" }}>
          <Button color="inherit" className={classes.button}>
            CANCELLATION
          </Button>
        </NavLink>

        <NavLink to="/printticket" style={{ textDecoration: "none" }}>
          <Button color="inherit" className={classes.button}>
            PRINT/SMS TICKET
          </Button>
        </NavLink>

        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <Button color="inherit" className={classes.button}>
            CONTACT US
          </Button>
        </NavLink>

        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <Button color="inherit" className={classes.button}>
            LOGIN
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(Styles)(NavBar);
