import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
  const { classes } = props;
  useEffect(() => {
    axios
      .get(
        "http://network-env.eba-qwadikw4.ap-south-1.elasticbeanstalk.com/getAllCity"
      )
      .then(res => {
        let city = res.data.data;
        console.log(city);
        setCityList(city);
      });
  }, []);
  return (
    <div className={classes.bg}>
      <Grid
        container
        spacing={2}
        direction="column"
        className={classes.gridstyle}
      >
        <Grid item xs={12}>
          <h3>Online Bus Ticket Booking</h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <p>From</p>
                <Autocomplete
                  id="combo-box-demo"
                  options={cityList}
                  getOptionLabel={option => option.cityname}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Select city name"
                      variant="outlined"
                      className={classes.inputbox}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <p>To</p>
                <Autocomplete
                  options={cityList}
                  getOptionLabel={option => option.cityname}
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
