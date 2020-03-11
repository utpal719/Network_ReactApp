import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
import logo from './footer.jpg'
const Footer = (props) => {
    const { classes } = props;
    return (
        <div >
            <Grid container className={classes.footer} spacing={2}>
                <Grid item xs>
                    <Typography>
                        <img src={logo} alt="Network Travels" />
                    </Typography>
                    <Typography variant="h6">
                        Booking, reviews and advices on bus travel
						<br />
                        packages, and lots more!
            </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs={12} container direction="column" spacing={2} >
                        <Grid item>
                            <Typography variant="h6">Have Questions?</Typography>
                            <br />
                            <Typography variant="caption">Network Travels: 8811079999, 7086093241, 7086018277(ISBT)</Typography>
                            <br />
                            <Typography variant="caption">Network Courier : 9435019337</Typography>
                            <br />
                            <Typography variant="caption">Network Cargo : 8011667971</Typography>
                            <br />
                            <Typography variant="caption">Air Ticket : 0361-2739630 and 03612739631</Typography>
                            <br />
                            <Typography variant="caption">Network Tourism : 9435154638, 9434506446</Typography>
                            <br />
                            <Typography variant="caption">networktravelsindia@gmail.com</Typography>
                            <br />
                            <Typography variant="caption">17 - Paltan Bazar, G.S. Road,</Typography>
                            <br />
                            <Typography variant="caption" >Guwahati - 781008</Typography>
                            <br />
                            <Typography variant="caption">Assam,India. </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default withStyles(Styles)(Footer);