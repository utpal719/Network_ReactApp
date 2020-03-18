import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import ContactForm from "../../components/ContactUs/ContactForm";
import ContactCard from "./ContactCard";
import EmailCard from "./EmailCard";
import LocationCard from "./LocationCard";
import { Styles } from "./Styles";
const ContactUsLayout = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.headerstyle}>
        We would love to hear from you
      </Typography>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={6} direction="column">
                <Grid item xs={8}>
                  <LocationCard />
                </Grid>
                <Grid item xs={8}>
                  <ContactCard />
                </Grid>
                <Grid item xs={8}>
                  <EmailCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.mapstyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.549907990999!2d91.74997241468034!3d26.178784083449155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a2988c2883b%3A0xba121101c0b11cc0!2sNetwork+Travels!5e0!3m2!1sen!2sin!4v1467902702743"
            width="85%"
            height="300px"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(ContactUsLayout);
