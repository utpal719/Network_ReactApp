import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import logo from "./logo1.png";
import HomePage from "./../../containers/HomePageContainer/HomePage";
import TourismPage from "./../../containers/TourismPageContainer/TourismPage";
import CancellationPage from "./../../containers/CancellationPageContainer/CancellationPage";
import PrintTicketPage from "./../../containers/PrintTicketContainer/PrintTicketPage";
import ContactPage from "./../../containers/ContactPageContainer/ContactPage";
import Login from "./../../containers/LoginContainer/Login";

const NavBar = props => {
  const [showComponent, setShowComponent] = useState(false);
  const { classes } = props;

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <AppBar>
      <Toolbar className={classes.navbar}>
        <img src={logo} alt="not found" />
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          HOME
        </Button>
        {showComponent ? <HomePage /> : null}
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          TOURISM
        </Button>
        {showComponent ? <TourismPage /> : null}
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          CANCELLATION
        </Button>
        {showComponent ? <CancellationPage /> : null}
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          PRINT/SMS TICKET
        </Button>
        {showComponent ? <PrintTicketPage /> : null}
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          CONTACT US
        </Button>
        {showComponent ? <ContactPage /> : null}
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          LOGIN
        </Button>
        {showComponent ? <Login /> : null}
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(Styles)(NavBar);
