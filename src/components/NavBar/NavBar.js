import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Chip,
  Avatar,
  Popper,
  MenuList,
  Grow,
  Paper,
  MenuItem,
  ClickAwayListener,
  Box
} from "@material-ui/core";
import { AccountCircle, ArrowDropDown } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo1.png";
import actionConstants from "../../redux/actionConstants";

const NavBar = props => {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  let userInfo = useSelector(state => state.user);
  let dispatch = useDispatch();
  let history = useHistory();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = event => {
    handleClose(event);
    localStorage.removeItem("ntToken");
    dispatch({ type: actionConstants.SET_USER_INFO, payload: { token: null } });
    history.push("/");
  };

  const handleMyTrip = e => {
    handleClose(e);
    history.push("/mytrips");
  };
  const handleBusChart = e => {
    handleClose(e);
    history.push("/buschart");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (
      prevOpen.current === true &&
      open === false &&
      anchorRef.current != null
    ) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Box displayPrint="none">
      <AppBar>
        <Toolbar className={classes.navbar}>
          <NavLink
            to="/home"
            style={{ textDecoration: "none", marginLeft: 50 }}
          >
            <img src={logo} alt="NETWORK" />
          </NavLink>
          <NavLink
            to="/home"
            style={{ textDecoration: "none", marginLeft: 50 }}
          >
            <Button color="inherit" className={classes.button}>
              HOME
            </Button>
          </NavLink>

          <NavLink to="/tourism" style={{ textDecoration: "none" }}>
            <Button color="inherit" className={classes.button}>
              TOURISM
            </Button>
          </NavLink>

          <NavLink to="/cancelticket" style={{ textDecoration: "none" }}>
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

          {/** If user is logged in, hide Login button and show a menu item instead */}
          {!userInfo.loggedIn ? (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button color="inherit" className={classes.button}>
                LOGIN
              </Button>
            </NavLink>
          ) : (
            <div>
              <Chip
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                avatar={
                  <Avatar>
                    <AccountCircle fontSize="24px" />
                  </Avatar>
                }
                label={userInfo.username}
                clickable
                style={{ color: "black", backgroundColor: "white" }}
                deleteIcon={<ArrowDropDown />}
              />

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleMyTrip}>My Trips</MenuItem>
                          <MenuItem onClick={handleBusChart}>
                            Bus Chart
                          </MenuItem>
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default withStyles(Styles)(NavBar);
