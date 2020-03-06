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
				<Grid item xs spacing={2}>
					<Typography>
						<img src={logo} alt="Network Travels" />
					</Typography>
					<Typography variant="h7">
						Booking, reviews and advices on bus travel
						<br/>
						packages, and lots more!
            </Typography>
				</Grid>
				<Grid item xs={12} sm container>
					<Grid item xs={12} container direction="column" spacing={2} >
						<Grid item>
							<Typography variant="h6">Have Questions?</Typography>
							<br/>
							<Typography variant="h7">Network Travels: 8811079999, 7086093241, 7086018277(ISBT)</Typography>
							<br/>
							<Typography variant="h7">Network Courier : 9435019337</Typography>
							<br/>
							<Typography variant="h7">Network Cargo : 8011667971</Typography>
							<br/>
							<Typography variant="h7">Air Ticket : 0361-2739630 and 03612739631</Typography>
							<br/>
							<Typography variant="h7">Network Tourism : 9435154638, 9434506446</Typography>
							<br/>
							<Typography variant="h7">networktravelsindia@gmail.com</Typography>
							<br/>
							<Typography variant="h7">17 - Paltan Bazar, G.S. Road,</Typography>
							<br/>
							<Typography variant="h7" >Guwahati - 781008</Typography>
							<br/>
							<Typography variant="h7">Assam,India. </Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
			);
		}
export default withStyles(Styles)(Footer);