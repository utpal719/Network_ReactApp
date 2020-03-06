import React from 'react'
import { withStyles, Grid } from '@material-ui/core';
import { Styles } from './Styles';
import logo1 from './bhutan.jpg'
import logo2 from './brahmaputra.jpg'
import logo3 from './myanmar.jpg'
import logo4 from './ne.jpg'

const TopDestinationBanner = (props) => {

	const { classes } = props;
	return (
		<div >
            <h2>TOP HOLIDAY DESTINATION</h2>
			<Grid container spacing={2} direction="row" className={classes.bg}>
					<Grid item xs={3} className={classes.gitem}>
						<img src={logo1} alt="bhutan-img"></img>
						<p>Bhutan Tour Itinerary</p>
					</Grid>
					<Grid item xs={3} className={classes.gitem}>
						<img src={logo2} alt="Brahmaputra-img"></img>
						<p>Brahmaputra Explorer</p>
					</Grid>
					<Grid item xs={3} className={classes.gitem}>
						<img src={logo3} alt="Myanmar-img"></img>
						<p>Myanmar Itinerary</p>
					</Grid>
                    <Grid item xs={3} className={classes.gitem}>
						<img src={logo4} alt="NE-img"></img>
						<p>Northeast India Itinerary</p>
					</Grid>
			</Grid>
		</div>

	);

}
export default withStyles(Styles)(TopDestinationBanner)