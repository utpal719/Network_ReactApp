import React from 'react'
import { withStyles, Grid } from '@material-ui/core';
import { Styles } from './Styles';
import logo1 from './../../../images/bus-80.png'
import logo2 from './../../../images/bus-81.png'
import logo3 from './../../../images/bus-82.png'

const FloatingBanner = (props) => {

	const { classes } = props;
	return (
		<div >
			<Grid container spacing={2} direction="column" className={classes.bg}>
				<Grid container spacing={2} direction="row" className={classes.bg}>
					<Grid item xs={4} className={classes.gitem}>
						<img src={logo1} alt="bus-img"></img>
						<p>20 Buses</p>
					</Grid>
					<Grid item xs={4} className={classes.gitem}>
						<img src={logo2} alt="ok-img"></img>
						<p>Best Travel Agents</p>
					</Grid>
					<Grid item xs={4} className={classes.gitem}>
						<img src={logo3} alt="lock-img"></img>
						<p>Trust and Safety</p>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.gitem}>
					Established in 1992, first Government of India recognized tour operator in Northeast India. Best rates and comprehensive packages for private
						<br />
					holidays. Tailor-made itineraries for special interest groups - birding, wildlife and nature, tribal culture, tea tourism, river cruise etc.
				</Grid>
			</Grid>
		</div>

	);

}
export default withStyles(Styles)(FloatingBanner)
