import React from 'react'
import { withStyles, Grid } from '@material-ui/core';
import {Styles} from './Styles'
import Carousel from '../../../components/Carousel/Carousel';
import logo from './googleplay.png'
import luxury from './70-1.png'
import essence from './70-2.png'
import trans from './70-3.png'
const CarouselBanner = (props) => {
	const {classes}=props;
	return (
		<div className={classes.bg}>
			<Grid container direction="row" spacing={2} className={classes.gridStyles} >
				<Grid item xs={6} >
					<Carousel />
					<img src={logo} alt="logo" />
				</Grid>
				<Grid item xs={6}>
				<Grid container direction="column" spacing={2}>
					<Grid item xs={3}>
						<img src={luxury} alt="luxury logo" />
						<h3>LUXURY</h3>
						<p>Booking bus tickets will never be a cause of concern!
Hassle-free booking and instant confirmation.</p>
					</Grid>
					<Grid item xs={3}>
						<img src={essence} alt="essence logo" />
						<h3>ESSENCE</h3>
						<p>Clean and safe journey with a well trained and reliable crew.</p>
					</Grid>
					<Grid item xs={3}>
						<img src={trans} alt="trans logo" />
						<h3>TRANSPERANCY</h3>
						<p>Transperant transaction with convinient online payment portal.</p>
					</Grid>
					</Grid>

				</Grid>

			</Grid>
		</div>

	);
}
export default withStyles(Styles)(CarouselBanner)