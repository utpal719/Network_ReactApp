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
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

let validationSchema = Yup.object({
  fromCity: Yup.string().required("Please select a city"),
  toCity: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date")
});

const Form = props => {
  const [busRoute, setBusRoute] = useState([]);
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      fromCity: "",
      journeyDate: new Date()
    },
    validationSchema,
    onSubmit: function(values) {
      dispatch({
        type: Constants.SET_SEARCH,
        payload: {
          from: values.busRoute,
          date: formatDate(values.journeyDate)
        }
      });

//      history.push("/searchresult");
    }
  });

  let dispatch = useDispatch();
//  let history = useHistory();
  let handleSourceChange = (_, value) =>
    formik.setFieldValue("busRoute", value);
  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  useEffect(() => {
    axios.get(`${config.API_URL}/getAllBuses`).then(res => {
      let route = res.data.data;
      route = route.map(item => item.cityname);
      setBusRoute(route);
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
          <h3>BUS CHART</h3>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <p>Select Bus</p>
                <Autocomplete
                  id="busRoute"
                  ListboxProps={{
                    name: "busRoute"
                  }}
                  options={cityList}
                  getOptionLabel={option => option}
                  onChange={handleSourceChange}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Select bus route"
                      variant="outlined"
                      className={classes.inputbox}
                    />
                  )}
                />
                <br />
                <div class="error form-error">
                  {formik.errors.busRoute &&
                    formik.touched.busRoute &&
                    formik.errors.busRoute}
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
