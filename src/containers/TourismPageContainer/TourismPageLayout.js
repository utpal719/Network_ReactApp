import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Styles } from "./Styles";
import { NavLink } from "react-router-dom";
import TopDestinationBanner from "../../components/TopDestinationBanner/TopDestinationBanner";
import ContactForm from "../../components/ContactUs/ContactForm";
import ContactCard from "./ContactCard";
import TopDestinationDetails from "./TopDestinationDetails/TopDestinationDetails";
const TourismPageLayout = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        The Last Frontier
      </Typography>
      <div className={classes.typo}></div>
      <br />
      <Typography variant="h5" display="block" align="center">
        Tailor-made Holidays & Group tours to Bhutan, Northeast India and
        Myanmar
      </Typography>
      <br/>
      <NavLink to="/travelguide" className={classes.navlink}>
      <Typography variant="h5" display="block" align="center">
        Download our E-Brouchure
      </Typography>
      </NavLink>
      <br/>
      <TopDestinationBanner />
      <TopDestinationDetails />
      <br />
      <Typography variant="h5" align="center">
        Free travel plan suggestions
      </Typography>
      <ContactForm />
      <Typography variant="h5" align="center">
        ----OR----
      </Typography>
      <ContactCard />
      <br />
    </div>
  );
};
export default withStyles(Styles)(TourismPageLayout);
