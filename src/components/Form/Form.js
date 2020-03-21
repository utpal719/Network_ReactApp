import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import Constants from "../../redux/actionConstants";
import { useHistory } from "react-router-dom";
import config from "../../config";

const Form = props => {
  const [cityList, setCityList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fromCity, setSourceCity] = useState({});
  const [toCity, setDestinationCity] = useState({});
  const { classes } = props;

  let dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = function(e) {
    e.preventDefault();
    dispatch({
      type: Constants.SET_SEARCH,
      payload: {
        from: fromCity.cityname,
        to: toCity.cityname,
        date: selectedDate.toDateString()
      }
    });

    history.push("/searchresult");
  };

  let handleSourceSelect = (e, value) => setSourceCity(value);
  let handleDestinationSelect = (e, value) => setDestinationCity(value);

  useEffect(() => {
    axios.get(`${config.API_URL}/getAllCity`).then(res => {
      let city = res.data.data;
      setCityList(city);
      props.stopLoading();
    });
  }, []);

  return (
    <div className={classes.bg}>
      <Grid
        container
        spacing={2}
        direction="column"
        className={classes.gridstyle}
        style={{ marginTop: 10 }}
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
                  onChange={handleSourceSelect}
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
                  onChange={handleDestinationSelect}
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
