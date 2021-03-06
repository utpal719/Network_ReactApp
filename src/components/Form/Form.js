import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Constants from "../../redux/actionConstants";
import { useHistory } from "react-router-dom";
import config from "../../config";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import googlePlayBadge from "./google-play-badge.png";

let validationSchema = Yup.object({
  fromCity: Yup.string().required("Please select a city"),
  toCity: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date"),
});

const Form = (props) => {
  const [cityList, setCityList] = useState([]);
  const { classes } = props;

  const { loggedIn, role } = useSelector((state) => state.user);

  let formBg = useRef(null);

  let formik = useFormik({
    initialValues: {
      fromCity: "",
      toCity: "",
      journeyDate: new Date(),
    },
    validationSchema,
    onSubmit: function(values) {
      dispatch({
        type: Constants.SET_SEARCH,
        payload: {
          from: values.fromCity,
          to: values.toCity,
          date: formatDate(values.journeyDate),
        },
      });

      history.push("/searchresult");
    },
  });

  let dispatch = useDispatch();
  let history = useHistory();

  let handleSourceChange = (_, value) =>
    formik.setFieldValue("fromCity", value);

  let handleDestinationChange = (_, value) =>
    formik.setFieldValue("toCity", value);

  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  useEffect(() => {
    axios.get(`${config.API_URL}/getAllCity`).then((res) => {
      let city = res.data.data;
      city = city.map((item) => item.cityname);
      setCityList(city);
      props.stopLoading();
    });
  }, []);

  useEffect(() => {
    onscroll = function() {
      let pageY = window.scrollY;
      if (formBg.current) {
        formBg.current.style.setProperty(
          "background-position-y",
          `${pageY * -0.15}px`
        );
      }
    };
  }, [window.scrollY, formBg.current]);

  return (
    <div className={classes.bg} ref={formBg}>
      {loggedIn && role !== 3 ? (
        <Grid
          container
          spacing={1}
          direction="column"
          className={classes.gridstyle}
          style={{ marginTop: 10 }}
        >
          <Grid item xs={10}>
            <h3>Online Bus Ticket Booking</h3>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={6}>
                  <p>From</p>
                  <Autocomplete
                    id="fromCity"
                    ListboxProps={{
                      name: "fromCity",
                    }}
                    options={cityList}
                    getOptionLabel={(option) => option}
                    onChange={handleSourceChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select city name"
                        variant="outlined"
                        size="small"
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
                    getOptionLabel={(option) => option}
                    onChange={handleDestinationChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select city name"
                        name="toCity"
                        variant="outlined"
                        size="small"
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
                    onChange={(date) => setSelectedDate(date)}
                    showMonthDropdown
                    dateFormat="MMM d, yyyy"
                    minDate={new Date()}
                    className={classes.inputdate}
                  />
                  <br />
                  <div class="error form-error">
                    {formik.errors.journeyDate}
                  </div>
                </Grid>
              </Grid>
              <br />
              <Button type="submit" className={classes.button}>
                Search Buses
              </Button>
            </form>
          </Grid>
        </Grid>
      ) : (
        <Grid container justify="center" direction="column">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h3" className={classes.tagline}>
              <strong>
                Book your bus with{" "}
                <span className={classes.subtagline}>US</span>
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <br />
            <a
              target="__blank"
              href="https://play.google.com/store/apps/details?id=com.techvariable.networktravels&hl=en_IN"
            >
              <img
                src={googlePlayBadge}
                alt="google play"
                style={{ width: "15%" }}
              />
            </a>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default withStyles(Styles)(Form);
