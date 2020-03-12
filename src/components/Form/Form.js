import React, { useState } from 'react'
import { TextField, MenuItem, Button, Select, Grid, OutlinedInput} from '@material-ui/core'
import DatePicker from 'react-datepicker'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from './../../images/location-icon.png'
import { Styles } from './Styles';
import "react-datepicker/dist/react-datepicker.css";
import './style.css'


const Form = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		fetch('/networktravels/busSearch', {
			method: 'post',
			body: data
		});
	}
	const [selectedDate,setSelectedDate]=useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const {classes}=props;
	return (
		<div className={classes.bg}>
			<Grid container spacing={1} className={classes.gridstyle}>
				<Grid item xs={12} >
					Online Bus Ticket Booking
					<form onSubmit={handleSubmit} >
						<Grid container spacing={2} direction="row">
							<Grid item xs={6}>
								<p>From</p>
								<OutlinedInput
									placeholder="Select City Name"
									type="text"
									name="source"
									className={classes.inputbox}
									startAdornment={
										<InputAdornment position="start">
											<img src={logo} className={classes.imgstyle}></img>
										</InputAdornment>
									} />
							</Grid>
							<Grid item xs={6}>
								<p>To</p>
								<OutlinedInput
									placeholder="Select City Name"
									type="text"
									name="destination"
									className={classes.inputbox}
									startAdornment={
										<InputAdornment position="start">
											<img src={logo} className={classes.imgstyle}></img>
										</InputAdornment>} />
								<br />
							</Grid>
						</Grid>
						<Grid container spacing={4} direction="row">
							<Grid item xs={6}>
								<p>Departing</p>
								<DatePicker
								selected={selectedDate}
								onChange={date=>setSelectedDate(date)}
								showMonthDropdown
								minDate={new Date()}
								/> 
							</Grid>
						</Grid>
						<br />
						<Button type="submit" className={classes.button} >Search Buses</Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(Styles)(Form)