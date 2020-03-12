import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Select,
  Grid,
  OutlinedInput
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import logo from "./../../images/location-icon.png";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const Form = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("/networktravels/busSearch", {
      method: "post",
      body: data
    });
  };
  const [cityList, setCityList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const { classes } = props;
  useEffect(() => {
    // axios.get('http://www.networktravels.com/city/getAllCityName').then(res=>{
    // const city=res.data;
    const city = [
      { cityId: 1, cityName: "NAMSAI" },
      { cityId: 2, cityName: "KAKOPATHAR" },
      { cityId: 3, cityName: "RUPAI" }
    ];
    setCityList(city);
    //	})
  }, []);
  return (
    <div className={classes.bg}>
      <Grid container spacing={2} direction="column" className={classes.gridstyle}>
        <Grid item xs={12}>
         <h3>Online Bus Ticket Booking</h3> 
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <p>From</p>
                <Autocomplete
                  id="combo-box-demo"
                  options={cityList}
                  getOptionLabel={option => option.cityName}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Select city name"
                      variant="outlined"
					        className={classes.inputbox}
					//   InputProps={{
					// 	startAdornment: (
					// 	  <InputAdornment position="start">
					// 		  <img src={logo} className={classes.imgstyle}></img>
					// 	  </InputAdornment>
					// 	),
					//   }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <p>To</p>
                <Autocomplete
                  options={cityList}
                  getOptionLabel={option => option.cityName}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Select city name"
                      variant="outlined"
                      className={classes.inputbox}
                    />
                  )}
                />
                <br />
              </Grid>
            </Grid>
            <Grid container spacing={4} direction="row">
              <Grid item xs={6}>
                <p>Departing</p>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  showMonthDropdown
                  dateFormat="MMMM d, yyyy "
                  minDate={new Date()}
                  className={classes.inputdate}
                />
              </Grid>
            </Grid>
            <br />
            <Button type="submit" className={classes.button}>
              Search Buses
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Form);
