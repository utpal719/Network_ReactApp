import React from 'react'
import { withStyles, Grid } from '@material-ui/core';
import { Styles } from './Styles'
import Carousel from '../../../components/Carousel/Carousel';
import logo from './../../../images/googleplay.png'
import luxury from './../../../images/70-1.png'
import essence from './../../../images/70-2.png'
import trans from './../../../images/70-3.png'
const CarouselBanner = (props) => {
	const {classes}=props;
	return (
		<div className={classes.bg}>
			<Grid container direction="row" spacing={2} className={classes.gridStyles} >
				<Grid item xs={4}  className={classes.inner} >
					<Carousel />
					<img src={logo} alt="logo" className={classes.imageStyle}/>
				</Grid>
				<Grid item xs={6}>
				<Grid container direction="column" spacing={2}>
					<Grid item xs={8} className={classes.inner}>
						<img src={luxury} alt="luxury logo" />
						<h4>LUXURY</h4>
						Booking bus tickets will never be a cause of concern!
Hassle-free booking and instant confirmation.
					</Grid>
					<Grid item xs={8} className={classes.inner}>
						<img src={essence} alt="essence logo" />
						<h4>ESSENCE</h4>
						Clean and safe journey with a well trained and reliable crew.
					</Grid>
					<Grid item xs={8} className={classes.inner}>
						<img src={trans} alt="trans logo" />
						<h4>TRANSPERANCY</h4>
						Transperant transaction with convinient online payment portal.
					</Grid>
					</Grid>

                </Grid>

            </Grid>
        </div>

    );
}
export default withStyles(Styles)(CarouselBanner)