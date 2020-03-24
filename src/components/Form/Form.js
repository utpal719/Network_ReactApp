import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useDispatch } from "react-redux";
import Constants from "../../redux/actionConstants";
import { useHistory } from "react-router-dom";
import config from "../../config";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";

let validationSchema = Yup.object({
  fromCity: Yup.string().required("Please select a city"),
  toCity: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date")
});

const Form = props => {
  const [cityList, setCityList] = useState([]);
  //   const [selectedDate, setSelectedDate] = useState(new Date());
  //   const [fromCity, setSourceCity] = useState({});
  //   const [toCity, setDestinationCity] = useState({});
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      fromCity: "",
      toCity: "",
      journeyDate: new Date()
    },
    validationSchema,
    onSubmit: function(values) {
      dispatch({
        type: Constants.SET_SEARCH,
        payload: {
          from: values.fromCity,
          to: values.toCity,
          date: formatDate(values.journeyDate)
        }
      });

      history.push("/searchresult");
    }
  });

  let dispatch = useDispatch();
  let history = useHistory();

  //   const handleSubmit = function(e) {
  //     e.preventDefault();
  //     dispatch({
  //       type: Constants.SET_SEARCH,
  //       payload: {
  //         from: fromCity.cityname,
  //         to: toCity.cityname,
  //         date: formatDate(selectedDate)
  //       }
  //     });

  //     history.push("/searchresult");
  //   };

  let handleSourceChange = (_, value) =>
    formik.setFieldValue("fromCity", value);

  let handleDestinationChange = (_, value) =>
    formik.setFieldValue("toCity", value);

  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  useEffect(() => {
    axios.get(`${config.API_URL}/getAllCity`).then(res => {
      let city = res.data.data;
      city = city.map(item => item.cityname);
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
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <p>From</p>
                <Autocomplete
                  id="fromCity"
                  ListboxProps={{
                    name: "fromCity"
                  }}
                  options={cityList}
                  getOptionLabel={option => option}
                  onChange={handleSourceChange}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Select city name"
                      variant="outlined"
                      data-testid="fromInput"
                      className={classes.inputbox}
                    />
                  )}
                />
                <br />
                <div class="error form-error">
                  {formik.errors.fromCity &&
                    formik.touched.fromCity &&
                    formik.errors.fromCity}
                </div>
              </Grid>
              <Grid item xs={6}>
                <p>To</p>
                <Autocomplete
                  options={cityList}
                  getOptionLabel={option => option}
                  onChange={handleDestinationChange}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Select city name"
                      name="toCity"
                      variant="outlined"
                      data-testid="toInput"
                      className={classes.inputbox}
                    />
                  )}
                />
                <br />
                <div class="error form-error">
                  {formik.errors.toCity &&
                    formik.touched.toCity &&
                    formik.errors.toCity}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} direction="row">
              <Grid item xs={6}>
                <p>Departing</p>
                <DatePicker
                  selected={formik.values.journeyDate}
                  name="journeyDate"
                  onChange={date => setSelectedDate(date)}
                  showMonthDropdown
                  dateFormat="MMM d, yyyy"
                  minDate={new Date()}
                  className={classes.inputdate}
                />
                <br />
                <div class="error form-error">{formik.errors.journeyDate}</div>
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
