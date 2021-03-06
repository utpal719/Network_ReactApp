import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import logo from "./../../images/footer.jpg";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = props => {
  const { classes } = props;
  return (
    <Box displayPrint="none">
      <Grid container className={classes.footer} spacing={2}>
        <Grid item xs={4} spacing={2} className={classes.gitem}>
          <Typography>
            <img src={logo} alt="Network Travels" />
          </Typography>
          <Typography variant="h7">
            Booking, reviews and advices on bus travel
            <br />
            packages, and lots more!
          </Typography>
          <ul className={classes.social}>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-google-plus"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
            <li>
              <i class="fab fa-pinterest"></i>
            </li>
          </ul>
        </Grid>
        <Grid item xs={4} className={classes.gitem}>
          <NavLink to="/contact" className={classes.link}>
            <Typography variant="h8">Contact Us</Typography>
          </NavLink>
          <br />
          <NavLink to="/aboutus" className={classes.link}>
            <Typography variant="h8">About Us</Typography>
          </NavLink>
          <br />
          <NavLink to="/cancelticket" className={classes.link}>
            <Typography variant="h8">Cancellation Policy </Typography>
          </NavLink>
          <br />
          <NavLink to="/termsandconditions" className={classes.link}>
            <Typography variant="h8">Terms & Condition </Typography>
          </NavLink>
          <br />
          <NavLink to="/privacypolicy" className={classes.link}>
            <Typography variant="h8">Privacy Policy </Typography>
          </NavLink>
          <br />
          <NavLink to="/refundpolicy" className={classes.link}>
            <Typography variant="h8">Refund Policy </Typography>
          </NavLink>
          <br />
        </Grid>

        <Grid item xs={4} sm container>
          <Grid item xs={12} container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6">Have Questions?</Typography>
              <Typography variant="h7">
                Network Travels: 8811079999, 7086093241, 7086018277(ISBT)
              </Typography>
              <br />
              <Typography variant="h7">Network Courier : 9435019337</Typography>
              <br />
              <Typography variant="h7">Network Cargo : 8011667971</Typography>
              <br />
              <Typography variant="h7">
                Air Ticket : 0361-2739630 and 03612739631
              </Typography>
              <br />
              <Typography variant="h7">
                Network Tourism : 9435154638, 9434506446
              </Typography>
              <br />
              <Typography variant="h7">
                networktravelsindia@gmail.com
              </Typography>
              <br />
              <Typography variant="h7">
                17 - Paltan Bazar, G.S. Road,
              </Typography>
              <br />
              <Typography variant="h7">Guwahati - 781008</Typography>
              <br />
              <Typography variant="h7">Assam,India. </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default withStyles(Styles)(Footer);
